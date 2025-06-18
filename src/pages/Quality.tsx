
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Manufacturing3D } from "@/components/Manufacturing3D";

const qualitySteps = [
  {
    step: 1,
    title: "Raw Material Selection",
    description: "Premium mild steel rods are carefully selected from certified suppliers",
    details: ["Chemical composition verification", "Dimensional accuracy check", "Surface quality inspection"],
    icon: "🏗️"
  },
  {
    step: 2,
    title: "Pickling Process",
    description: "Acid treatment removes surface oxides and scale for optimal wire properties",
    details: ["Controlled acid concentration", "Temperature monitoring", "Thorough rinsing process"],
    icon: "🧪"
  },
  {
    step: 3,
    title: "Annealing",
    description: "Heat treatment process ensures optimal ductility and workability",
    details: ["Precise temperature control", "Controlled cooling cycles", "Stress relief optimization"],
    icon: "🔥"
  },
  {
    step: 4,
    title: "Wire Drawing",
    description: "Multi-stage drawing process achieves precise diameter and surface finish",
    details: ["Progressive reduction stages", "Lubricant application", "Dimensional control"],
    icon: "⚙️"
  },
  {
    step: 5,
    title: "Quality Testing",
    description: "Comprehensive testing ensures product meets all specifications",
    details: ["Tensile strength testing", "Dimensional verification", "Surface finish inspection"],
    icon: "🔬"
  },
  {
    step: 6,
    title: "Packaging & Dispatch",
    description: "Careful packaging ensures product integrity during transportation",
    details: ["Moisture protection", "Secure spooling", "Clear labeling system"],
    icon: "📦"
  }
];

const qualityParameters = [
  {
    parameter: "Tensile Strength",
    specification: "380-420 N/mm²",
    testMethod: "IS 1608 / ASTM A510",
    frequency: "Every batch"
  },
  {
    parameter: "Dimensional Tolerance",
    specification: "±0.02mm to ±0.04mm",
    testMethod: "Micrometer measurement",
    frequency: "Continuous monitoring"
  },
  {
    parameter: "Surface Finish",
    specification: "Smooth, defect-free",
    testMethod: "Visual inspection",
    frequency: "100% inspection"
  },
  {
    parameter: "Coil Weight",
    specification: "As per customer requirement",
    testMethod: "Precision weighing",
    frequency: "Every coil"
  }
];

const Quality = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Manufacturing Process & <span className="text-yellow-400">Quality</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              State-of-the-art manufacturing processes combined with rigorous quality control 
              ensure consistent product excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Six-stage precision manufacturing process ensuring consistent quality 
              and performance in every meter of wire produced.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualitySteps.map((step, index) => (
              <div
                key={step.step}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-yellow-400"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-slate-800 font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="text-3xl">{step.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 mb-4">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Manufacturing Visualization */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              3D Process Visualization
            </h2>
            <p className="text-lg text-slate-600">
              Interactive view of our wire drawing and processing equipment
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Manufacturing3D />
          </div>
        </div>
      </section>

      {/* Quality Parameters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Quality Control Parameters
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive testing protocols ensure every batch meets our stringent quality standards
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Parameter</th>
                  <th className="px-6 py-4 text-left font-semibold">Specification</th>
                  <th className="px-6 py-4 text-left font-semibold">Test Method</th>
                  <th className="px-6 py-4 text-left font-semibold">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {qualityParameters.map((param, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-slate-800">{param.parameter}</td>
                    <td className="px-6 py-4 text-slate-600">{param.specification}</td>
                    <td className="px-6 py-4 text-slate-600">{param.testMethod}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        {param.frequency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-slate-600">
              Our commitment to quality is backed by industry certifications and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">ISO Compliance</h3>
              <p className="text-slate-600">Quality management systems following international standards</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">IS Standards</h3>
              <p className="text-slate-600">Compliance with Indian Standard specifications for wire products</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Third-Party Testing</h3>
              <p className="text-slate-600">Regular verification by accredited testing laboratories</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Quality;
