
import { Factory, Wrench, Cable, Rope } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    name: "Mattress & Spring Manufacturers",
    description: "High-quality wire for spring systems and bedding applications",
    icon: Factory,
    link: "/industries"
  },
  {
    name: "Wire Brush Industries",
    description: "Durable wire solutions for industrial and household brush manufacturing",
    icon: Wrench,
    link: "/industries"
  },
  {
    name: "Cable Armouring Units",
    description: "Reliable wire for cable protection and electrical applications",
    icon: Cable,
    link: "/industries"
  },
  {
    name: "Rope Manufacturers",
    description: "Strong core wire for rope and cable manufacturing applications",
    icon: Rope,
    link: "/industries"
  }
];

export const IndustriesServed = () => {
  return (
    <section className="py-16 bg-slate-50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {industry.name}
                </h3>
                <p className="text-slate-600 mb-4">
                  {industry.description}
                </p>
                <Link
                  to={industry.link}
                  className="text-yellow-600 hover:text-yellow-700 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/industries"
            className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
          >
            View All Industries
          </Link>
        </div>
      </div>
    </section>
  );
};
