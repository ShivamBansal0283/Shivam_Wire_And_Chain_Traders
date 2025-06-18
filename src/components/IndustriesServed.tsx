
import { industry } from "lucide-react";

const industries = [
  {
    name: "Mattress & Spring Manufacturers",
    description: "High-quality wire for mattress springs and support systems",
    icon: "🛏️",
    wireSizes: "0.8mm - 1.5mm",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    name: "Wire Brush Makers",
    description: "Precision wire for industrial and household brush applications",
    icon: "🧹",
    wireSizes: "0.6mm - 1.0mm",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    name: "Cable Armouring Units",
    description: "Durable wire for cable protection and reinforcement",
    icon: "🔌",
    wireSizes: "1.0mm - 2.0mm",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  },
  {
    name: "Rope Manufacturers",
    description: "Strong core wire for rope and cable manufacturing",
    icon: "🪢",
    wireSizes: "1.2mm - 2.0mm",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

export const IndustriesServed = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted partner across diverse industries, delivering quality wire solutions 
            tailored to specific manufacturing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className={`${industry.bgColor} ${industry.borderColor} border-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-slate-500 font-medium">Recommended Sizes:</span>
                      <div className="text-yellow-600 font-semibold">{industry.wireSizes}</div>
                    </div>
                    <button className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
