
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-md flex items-center justify-center">
                <span className="text-slate-800 font-bold text-lg">SW</span>
              </div>
              <span className="text-white font-bold text-xl">Shivam Wires</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Trusted manufacturer of soft mild steel wire (0.6mm - 2mm) based in Agra, India. 
              Serving industries nationwide with precision-drawn wire for mattress, brush, 
              and cable manufacturing applications.
            </p>
            <div className="space-y-2">
              <p className="text-slate-300">
                📍 Agra, Uttar Pradesh, India
              </p>
              <p className="text-slate-300">
                📞 +91 XXXXXXXXXX
              </p>
              <p className="text-slate-300">
                ✉️ info@shivamwires.com
              </p>
              <p className="text-slate-300">
                💬 WhatsApp: +91 XXXXXXXXXX
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Quality
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Wire Sizes
            </h3>
            <ul className="space-y-2">
              <li className="text-slate-300">0.6mm Wire</li>
              <li className="text-slate-300">0.8mm Wire</li>
              <li className="text-slate-300">1.0mm Wire</li>
              <li className="text-slate-300">1.2mm Wire</li>
              <li className="text-slate-300">1.5mm Wire</li>
              <li className="text-slate-300">2.0mm Wire</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Shivam Wires. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-2 md:mt-0">
              GST: XXXXXXXXXXXX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
