
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WireProduct3D } from "@/components/WireProduct3D";
import { Link } from "react-router-dom";

const products = [
  {
    size: "0.6mm",
    description: "Ultra-fine wire perfect for delicate applications",
    applications: ["Fine mesh manufacturing", "Small precision springs", "Electronic components", "Jewelry making"],
    specifications: { tensile: "380-420 N/mm²", coating: "Pickled & Annealed", tolerance: "±0.02mm" },
    industries: ["Electronics", "Jewelry", "Medical Devices"]
  },
  {
    size: "0.8mm",
    description: "Versatile wire for various industrial applications",
    applications: ["Wire brush bristles", "Small cable cores", "Filter meshes", "Automotive parts"],
    specifications: { tensile: "380-420 N/mm²", coating: "Pickled & Annealed", tolerance: "±0.02mm" },
    industries: ["Automotive", "Brush Manufacturing", "Filtration"]
  },
  {
    size: "1.0mm",
    description: "Most popular size for general industrial use",
    applications: ["Mattress springs", "Wire mesh", "Cable reinforcement", "General fabrication"],
    specifications: { tensile: "380-420 N/mm²", coating: "Pickled & Annealed", tolerance: "±0.03mm" },
    industries: ["Mattress", "Construction", "General Manufacturing"]
  },
  {
    size: "1.2mm",
    description: "Medium gauge for heavy-duty applications",
    applications: ["Cable armouring", "Rope cores", "Industrial springs", "Wire forms"],
    specifications: { tensile: "380-420 N/mm²", coating: "Pickled & Annealed", tolerance: "±0.03mm" },
    industries: ["Cable", "Rope", "Industrial Equipment"]
  },
  {
    size: "1.5mm",
    description: "Heavy-duty wire for demanding applications",
    applications: ["Heavy springs", "Construction reinforcement", "Agricultural equipment", "Wire rope"],
    specifications: { tensile: "380-420 N/mm²", coating: "Pickled & Annealed", tolerance: "±0.04mm" },
    industries: ["Construction", "Agriculture", "Heavy Industry"]
  },
  {
    size: "2.0mm",
    description: "Maximum gauge for industrial applications",
    applications: ["Heavy-duty springs", "Structural reinforcement", "Mining equipment", "Marine applications"],
    specifications: { tensile: "380-420 N/mm²", coating: "Pickled & Annealed", tolerance: "±0.04mm" },
    industries: ["Mining", "Marine", "Heavy Construction"]
  }
];

const Products = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");

  const industries = ["All", "Electronics", "Automotive", "Mattress", "Construction", "Mining", "Marine"];
  const sizes = ["All", "0.6mm", "0.8mm", "1.0mm", "1.2mm", "1.5mm", "2.0mm"];

  const filteredProducts = products.filter(product => {
    const industryMatch = selectedIndustry === "All" || product.industries.includes(selectedIndustry);
    const sizeMatch = selectedSize === "All" || product.size === selectedSize;
    return industryMatch && sizeMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-yellow-400">Product Range</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive selection of mild steel wire from 0.6mm to 2mm, 
              precision-engineered for various industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-slate-700 font-semibold mb-2">Filter by Industry</label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-slate-700 font-semibold mb-2">Filter by Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
              >
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.size}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 flex justify-center">
                  <WireProduct3D size={product.size} />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {product.size} Wire
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Applications:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {product.applications.slice(0, 3).map((app, i) => (
                        <li key={i}>• {app}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Specifications:</h4>
                    <div className="text-sm text-slate-600 space-y-1">
                      <div>Tensile Strength: {product.specifications.tensile}</div>
                      <div>Coating: {product.specifications.coating}</div>
                      <div>Tolerance: {product.specifications.tolerance}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {product.industries.slice(0, 2).map((industry, i) => (
                        <span key={i} className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                          {industry}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No products match your filter criteria.</p>
              <button
                onClick={() => {
                  setSelectedIndustry("All");
                  setSelectedSize("All");
                }}
                className="mt-4 bg-yellow-400 text-slate-800 px-6 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;
