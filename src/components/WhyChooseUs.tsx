
const features = [
  {
    title: "Custom Sizing",
    description: "Precise wire dimensions from 0.6mm to 2mm to meet your exact specifications",
    icon: "📏",
    bgColor: "bg-blue-100"
  },
  {
    title: "Reliable Dispatch",
    description: "Consistent nationwide delivery with packaging designed for safe transport",
    icon: "🚛",
    bgColor: "bg-green-100"
  },
  {
    title: "Quality Testing",
    description: "Rigorous testing protocols ensure consistent wire strength and durability",
    icon: "🔬",
    bgColor: "bg-yellow-100"
  },
  {
    title: "Local Manufacturing",
    description: "Agra-based production facility with modern equipment and skilled workforce",
    icon: "🏭",
    bgColor: "bg-purple-100"
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why Choose Shivam Wires?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Four decades of excellence in wire manufacturing, 
            combining traditional craftsmanship with modern technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
