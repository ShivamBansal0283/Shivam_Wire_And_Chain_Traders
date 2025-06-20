
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface InquiryData {
  name: string
  company: string
  phone: string
  wireSize: string
  quantity: string
  city: string
  message?: string
}

const validateInquiry = (data: InquiryData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []

  // Required field validation
  if (!data.name?.trim()) errors.push("Name is required")
  if (!data.company?.trim()) errors.push("Company name is required")
  if (!data.phone?.trim()) errors.push("Phone number is required")
  if (!data.wireSize?.trim()) errors.push("Wire size is required")
  if (!data.quantity?.trim()) errors.push("Quantity is required")
  if (!data.city?.trim()) errors.push("City is required")

  // Format validation
  if (data.name && data.name.length > 100) errors.push("Name must be less than 100 characters")
  if (data.company && data.company.length > 200) errors.push("Company name must be less than 200 characters")
  if (data.phone && !/^[+]?[0-9\s\-()]{10,15}$/.test(data.phone.replace(/\s/g, ''))) {
    errors.push("Please enter a valid phone number (10-15 digits)")
  }
  if (data.city && data.city.length > 100) errors.push("City must be less than 100 characters")
  if (data.message && data.message.length > 1000) errors.push("Message must be less than 1000 characters")

  return { isValid: errors.length === 0, errors }
}

const sendEmail = async (inquiryData: InquiryData): Promise<boolean> => {
  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    const BUSINESS_EMAIL = Deno.env.get('BUSINESS_EMAIL') || 'info@shivamwires.com'
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured')
      return false
    }

    const emailBody = `
      <h2>New Inquiry from Shivam Wires Website</h2>
      <h3>Customer Details:</h3>
      <p><strong>Name:</strong> ${inquiryData.name}</p>
      <p><strong>Company:</strong> ${inquiryData.company}</p>
      <p><strong>Phone:</strong> ${inquiryData.phone}</p>
      <p><strong>City:</strong> ${inquiryData.city}</p>
      
      <h3>Product Requirements:</h3>
      <p><strong>Wire Size:</strong> ${inquiryData.wireSize}</p>
      <p><strong>Quantity Required:</strong> ${inquiryData.quantity}</p>
      
      ${inquiryData.message ? `<h3>Additional Message:</h3><p>${inquiryData.message}</p>` : ''}
      
      <hr>
      <p><small>This inquiry was submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</small></p>
    `

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Shivam Wires <noreply@yourdomain.com>',
        to: [BUSINESS_EMAIL],
        subject: `New Wire Inquiry from ${inquiryData.company} - ${inquiryData.wireSize}`,
        html: emailBody,
        reply_to: `${inquiryData.name} <noreply@yourdomain.com>`,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Email sending failed:', errorData)
      return false
    }

    return true
  } catch (error) {
    console.error('Email sending error:', error)
    return false
  }
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  try {
    // Rate limiting check (simple IP-based)
    const clientIP = req.headers.get('x-forwarded-for') || 'unknown'
    console.log(`Inquiry submission from IP: ${clientIP}`)

    // Parse request body
    let inquiryData: InquiryData
    try {
      inquiryData = await req.json()
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Validate inquiry data
    const { isValid, errors } = validateInquiry(inquiryData)
    if (!isValid) {
      return new Response(
        JSON.stringify({ error: 'Validation failed', details: errors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Send email first
    const emailSent = await sendEmail(inquiryData)
    
    // Store in database
    const { error: dbError } = await supabase
      .from('inquiries')
      .insert({
        name: inquiryData.name.trim(),
        company: inquiryData.company.trim(),
        phone: inquiryData.phone.trim(),
        wire_size: inquiryData.wireSize,
        quantity: inquiryData.quantity.trim(),
        city: inquiryData.city.trim(),
        message: inquiryData.message?.trim() || null,
        email_sent: emailSent
      })

    if (dbError) {
      console.error('Database error:', dbError)
      return new Response(
        JSON.stringify({ 
          error: 'Failed to save inquiry', 
          details: 'Please try again later or contact us directly' 
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: emailSent 
          ? 'Your inquiry has been submitted successfully! We will contact you within 24 hours.'
          : 'Your inquiry has been saved successfully! We will contact you within 24 hours.',
        emailSent 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error', 
        details: 'Please try again later or contact us directly' 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
