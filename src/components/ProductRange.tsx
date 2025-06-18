
import { Link } from "react-router-dom";
import { WireProduct3D } from "./WireProduct3D";

const products = [
  { size: "0.6mm", applications: "Fine mesh, small springs", color: "bg-blue-100" },
  { size: "0.8mm", applications: "Brush bristles, small cables", color: "bg-green-100" },
  { size: "1.0mm", applications: "Mattress springs, wire mesh", color: "bg-yellow-100" },
  { size: "1.2mm", applications: "Cable armouring, rope cores", color: "bg-red-100" },
  { size: "1.5mm", applications: "Heavy-duty springs", color: "bg-purple-100" },
  { size: "2.0mm", applications: "Industrial applications", color: "bg-orange-100" },
];

export const ProductRange = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive selection of mild steel wire from 0.6mm to 2mm, 
            precision-drawn for various industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.size}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`${product.color} p-6 flex justify-center`}>
                <WireProduct3D size={product.size} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {product.size} Wire
                </h3>
                <p className="text-slate-600 mb-4">
                  {product.applications}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-semibold">
                    Industrial Grade
                  </span>
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

        <div className="text-center">
          <Link
            to="/products"
            className="bg-yellow-400 text-slate-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};
