
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    city: "",
    wireSize: "",
    quantity: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. Our team will contact you within 24 hours with a detailed quote.",
    });
    setFormData({
      name: "",
      company: "",
      mobile: "",
      city: "",
      wireSize: "",
      quantity: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "91XXXXXXXXXX";
    const message = "Hi! I'm interested in your wire products. Please share more details.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+91XXXXXXXXXX', '_self');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-yellow-400">Shivam Wires</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get in touch with us for competitive pricing, product inquiries, 
              or any questions about our wire manufacturing services.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Actions */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={handleCallClick}
              className="flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span className="text-xl">📞</span>
              <div className="text-left">
                <div className="font-semibold">Call Now</div>
                <div className="text-sm">+91 XXXXXXXXXX</div>
              </div>
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center space-x-3 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <span className="text-xl">💬</span>
              <div className="text-left">
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm">Quick Response</div>
              </div>
            </button>

            <a
              href="mailto:info@shivamwires.com"
              className="flex items-center justify-center space-x-3 bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <span className="text-xl">✉️</span>
              <div className="text-left">
                <div className="font-semibold">Email</div>
                <div className="text-sm">info@shivamwires.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Send Us Your Requirements
              </h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below with your specific requirements, and our team 
                will provide you with a detailed quote within 24 hours.
              </p>

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
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="+91 XXXXXXXXXX"
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
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      Wire Size *
                    </label>
                    <select
                      name="wireSize"
                      required
                      value={formData.wireSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="">Select wire size</option>
                      <option value="0.6mm">0.6mm</option>
                      <option value="0.8mm">0.8mm</option>
                      <option value="1.0mm">1.0mm</option>
                      <option value="1.2mm">1.2mm</option>
                      <option value="1.5mm">1.5mm</option>
                      <option value="2.0mm">2.0mm</option>
                      <option value="mixed">Mixed sizes</option>
                      <option value="custom">Custom requirement</option>
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
                      placeholder="e.g., 500 kg, 10 tons, 100 coils"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Additional Requirements / Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Please specify any additional requirements, delivery timeline, or questions you may have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    Factory Address
                  </h3>
                  <div className="space-y-2 text-slate-600">
                    <p>📍 Shivam Wires Manufacturing Unit</p>
                    <p>Industrial Area, Sector - 12</p>
                    <p>Agra, Uttar Pradesh 282001</p>
                    <p>India</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    Contact Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">📞</span>
                      <div>
                        <p className="font-semibold text-slate-800">Phone</p>
                        <p className="text-slate-600">+91 XXXXXXXXXX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">💬</span>
                      <div>
                        <p className="font-semibold text-slate-800">WhatsApp</p>
                        <p className="text-slate-600">+91 XXXXXXXXXX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">✉️</span>
                      <div>
                        <p className="font-semibold text-slate-800">Email</p>
                        <p className="text-slate-600">info@shivamwires.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    Business Information
                  </h3>
                  <div className="space-y-2 text-slate-600">
                    <p><strong>GST Number:</strong> XXXXXXXXXXXX</p>
                    <p><strong>Business Hours:</strong> Mon-Sat, 9:00 AM - 6:00 PM</p>
                    <p><strong>Response Time:</strong> Within 24 hours</p>
                    <p><strong>Payment Terms:</strong> As per agreement</p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    Location Map
                  </h3>
                  <div className="h-48 bg-slate-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-slate-500">
                      <div className="text-3xl mb-2">🗺️</div>
                      <p>Interactive Map</p>
                      <p className="text-sm">Agra, Uttar Pradesh</p>
                      <p className="text-xs mt-2">Click to view in Google Maps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
