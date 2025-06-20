
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const InquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    wireSize: "",
    quantity: "",
    city: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch('https://fhgxutirfgwqkbcjnlpw.supabase.co/functions/v1/submit-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Inquiry Submitted Successfully!",
          description: result.message,
        });
        setFormData({
          name: "",
          company: "",
          phone: "",
          wireSize: "",
          quantity: "",
          city: "",
          message: ""
        });
      } else {
        const errorMessage = result.details 
          ? Array.isArray(result.details) 
            ? result.details.join(', ')
            : result.details
          : result.error || 'Failed to submit inquiry';
          
        toast({
          title: "Submission Failed",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Network Error",
        description: "Please check your connection and try again, or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Request a Quote
          </h2>
          <p className="text-lg text-slate-600">
            Get competitive pricing for your wire requirements. 
            Our team will respond with a detailed quote within 24 hours.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Your company name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="+91 XXXXXXXXXX"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Wire Size Needed *
                </label>
                <select
                  name="wireSize"
                  required
                  value={formData.wireSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  disabled={isSubmitting}
                >
                  <option value="">Select wire size</option>
                  <option value="0.6mm">0.6mm</option>
                  <option value="0.8mm">0.8mm</option>
                  <option value="1.0mm">1.0mm</option>
                  <option value="1.2mm">1.2mm</option>
                  <option value="1.5mm">1.5mm</option>
                  <option value="2.0mm">2.0mm</option>
                  <option value="mixed">Mixed sizes</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Quantity Required *
                </label>
                <input
                  type="text"
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="e.g., 500 kg, 10 tons"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Your city"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-2">
                Additional Requirements
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Any specific requirements or questions..."
                disabled={isSubmitting}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-400 text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
