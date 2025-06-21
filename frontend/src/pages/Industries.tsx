import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import COMPANY_INFO from "@/config";

const industries = [
  {
    name: "Mattress & Spring Manufacturers",
    description: "Premium quality wire solutions for the bedding industry, providing consistent spring performance and durability.",
    icon: "🛏️",
    wireSizes: ["0.8mm", "1.0mm", "1.2mm", "1.5mm"],
    applications: [
      "Pocket spring systems",
      "Bonnell spring units",
      "Continuous coil systems",
      "Memory foam support cores"
    ],
    keyBenefits: [
      "Consistent tensile strength",
      "Excellent fatigue resistance",
      "Corrosion-resistant coating",
      "Precise dimensional tolerance"
    ],
    testimonial: {
      text: `Shivam Wires has been our trusted partner for over 5 years. Their consistent quality helps us maintain our reputation in the premium mattress segment.`,
      company: COMPANY_INFO.name,
      person: "Manufacturing Head"
    },
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    name: "Wire Brush Makers",
    description: "Specialized wire for industrial and household brush manufacturing, offering optimal stiffness and durability.",
    icon: "🧹",
    wireSizes: ["0.6mm", "0.8mm", "1.0mm"],
    applications: [
      "Industrial cleaning brushes",
      "Household cleaning tools",
      "Paint brushes and rollers",
      "Automotive detailing brushes"
    ],
    keyBenefits: [
      "Superior bend resistance",
      "Smooth surface finish",
      "Consistent wire diameter",
      "Easy processing characteristics"
    ],
    testimonial: {
      text: `The quality of wire from ${COMPANY_INFO.name} ensures our brushes maintain their shape and effectiveness even under heavy use.`,
      company: "Premium Brush Co.",
      person: "Quality Manager"
    },
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    name: "Cable Armouring Units",
    description: "Heavy-duty wire for cable protection and reinforcement, meeting stringent electrical industry standards.",
    icon: "🔌",
    wireSizes: ["1.0mm", "1.2mm", "1.5mm", "2.0mm"],
    applications: [
      "Power cable armouring",
      "Telecommunications cable protection",
      "Underground cable systems",
      "Marine cable applications"
    ],
    keyBenefits: [
      "High tensile strength",
      "Excellent corrosion resistance",
      "Precise galvanized coating",
      "Consistent mechanical properties"
    ],
    testimonial: {
      text: `For critical infrastructure projects, we rely on ${COMPANY_INFO.name} for their consistent quality and timely delivery.`,
      company: "Power Grid Solutions",
      person: "Project Director"
    },
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  },
  {
    name: "Rope Manufacturers",
    description: "Strong core wire for rope and cable manufacturing, providing structural integrity and load-bearing capacity.",
    icon: "🪢",
    wireSizes: ["1.2mm", "1.5mm", "2.0mm"],
    applications: [
      "Wire rope cores",
      "Steel cable manufacturing",
      "Marine rope applications",
      "Construction lifting equipment"
    ],
    keyBenefits: [
      "Maximum breaking strength",
      "Excellent fatigue life",
      "Uniform strand construction",
      "Weather-resistant properties"
    ],
    testimonial: {
      text: `Our rope products have gained international recognition, thanks to the reliable wire quality from ${COMPANY_INFO.name}.`,
      company: "Marine Rope Industries",
      person: "Export Manager"
    },
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Industries <span className="text-yellow-400">We Serve</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Trusted partner across diverse industries, delivering quality wire solutions 
              tailored to specific manufacturing needs and applications.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className={`${industry.bgColor} ${industry.borderColor} border-2 rounded-2xl overflow-hidden`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Left Column */}
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-5xl">{industry.icon}</div>
                      <h2 className="text-3xl font-bold text-slate-800">
                        {industry.name}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-slate-800 mb-3">
                        Recommended Wire Sizes
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {industry.wireSizes.map((size, i) => (
                          <span key={i} className="bg-yellow-400 text-slate-800 px-3 py-1 rounded-full font-semibold">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-slate-800 mb-3">
                        Key Applications
                      </h3>
                      <ul className="space-y-2">
                        {industry.applications.map((app, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                            <span className="text-slate-600">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">
                        Key Benefits
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {industry.keyBenefits.map((benefit, i) => (
                          <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                              <span className="text-slate-700 font-medium">{benefit}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Testimonial */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl text-yellow-400">"</div>
                        <div>
                          <p className="text-slate-600 italic mb-4">
                            {industry.testimonial.text}
                          </p>
                          <div>
                            <p className="font-semibold text-slate-800">
                              {industry.testimonial.company}
                            </p>
                            <p className="text-slate-500 text-sm">
                              {industry.testimonial.person}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Link
                        to="/contact"
                        className="bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors inline-block"
                      >
                        Request Industry-Specific Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't See Your Industry Listed?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            We work with many other industries and can customize our wire products 
            to meet your specific requirements.
          </p>
          <Link
            to="/contact"
            className="bg-yellow-400 text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors inline-block"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Industries;
