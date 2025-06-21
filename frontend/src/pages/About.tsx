import { useState, useEffect } from "react";
import COMPANY_INFO from "@/config";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

const CountingNumber = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep));
      } else {
        setCount(target);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
};

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-yellow-400">{COMPANY_INFO.name}</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Four decades of excellence in wire manufacturing, serving industries 
              across India with quality, precision, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in the industrial heart of Agra, Uttar Pradesh, {COMPANY_INFO.name} began 
                  as a small-scale wire manufacturing unit with a vision to provide high-quality 
                  mild steel wire solutions to Indian industries.
                </p>
                <p>
                  Over the decades, we have grown into a trusted name in the wire manufacturing 
                  sector, specializing in pickled, annealed, and drawn mild steel HB wire. 
                  Our commitment to quality and innovation has earned us partnerships with 
                  leading manufacturers across various industries.
                </p>
                <p>
                  Today, Shivam Wires stands as a testament to the power of consistent quality, 
                  customer-focused service, and continuous improvement in manufacturing processes.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🏭</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Since 1980</h3>
                <p className="text-slate-600">Over 40 years of manufacturing excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-center">
                To manufacture and supply the highest quality mild steel wire products 
                that meet and exceed our customers' expectations, while maintaining 
                sustainable business practices and contributing to India's industrial growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-center">
                To be the most trusted and preferred wire manufacturing partner in India, 
                known for innovation, quality excellence, and customer satisfaction across 
                all industry segments we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-slate-600">
              Numbers that reflect our commitment to excellence and growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                <CountingNumber target={40} suffix="+" />
              </div>
              <p className="text-slate-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                <CountingNumber target={500} suffix="+" />
              </div>
              <p className="text-slate-600">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                <CountingNumber target={15} suffix="+" />
              </div>
              <p className="text-slate-600">States Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                <CountingNumber target={99} suffix="%" />
              </div>
              <p className="text-slate-600">Quality Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600">
              The principles that guide every aspect of our business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Quality First</h3>
              <p className="text-slate-600">
                Uncompromising commitment to quality in every product we manufacture
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Customer Focus</h3>
              <p className="text-slate-600">
                Building lasting relationships through exceptional service and support
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Innovation</h3>
              <p className="text-slate-600">
                Continuous improvement and adoption of modern manufacturing techniques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-slate-300 rounded-full flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Message from the Founder
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed italic mb-4">
                  "When I started {COMPANY_INFO.name} four decades ago, my vision was simple - 
                  to create products that our customers could rely on completely. Today, 
                  as we serve industries across India, that same commitment to quality 
                  and reliability remains at the heart of everything we do."
                </p>
                <div>
                  <p className="font-semibold text-slate-800">Shri Pradeep Bansal</p>
                  <p className="text-slate-500">Founder & Proprietor
</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Location
            </h2>
            <p className="text-lg text-slate-600">
              Strategically located in Agra for efficient nationwide distribution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Agra?
              </h3>
              <div className="space-y-4 text-slate-600">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
                  <p>Strategic location in northern India with excellent connectivity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
                  <p>Access to major industrial corridors and transportation networks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
                  <p>Proximity to raw material suppliers and key customer markets</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
                  <p>Skilled workforce with traditional metalworking expertise</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="h-64 bg-slate-200 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-slate-500">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p>Interactive Map</p>
                  <p className="text-sm">Agra, Uttar Pradesh</p>
                </div>
              </div>
              <div className="space-y-2 text-slate-600">
                <p><strong>Address:</strong> {COMPANY_INFO.address || 'Industrial Area, Agra, UP 282001'}</p>
                <p><strong>Phone:</strong> {COMPANY_INFO.phone}</p>
                <p><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="underline">{COMPANY_INFO.email}</a></p>
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

export default About;
