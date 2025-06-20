
-- Create table for storing inquiry submissions
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT NOT NULL,
  wire_size TEXT NOT NULL,
  quantity TEXT NOT NULL,
  city TEXT NOT NULL,
  message TEXT,
  email_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - only allow reading for now since no user auth
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for form submissions)
CREATE POLICY "Allow public inserts" 
  ON public.inquiries 
  FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Create policy to prevent public reads (only backend can read)
CREATE POLICY "No public reads" 
  ON public.inquiries 
  FOR SELECT 
  TO anon
  USING (false);

-- Add index for better performance
CREATE INDEX idx_inquiries_created_at ON public.inquiries(created_at DESC);
CREATE INDEX idx_inquiries_email_sent ON public.inquiries(email_sent);
