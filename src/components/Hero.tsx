
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative bg-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 to-slate-700/80 z-10"></div>
      
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69765e29e0ceb8d6a5d6e3e58e4bd8a46&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
        {/* Fallback image if video fails to load */}
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div>
      </video>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Trusted Manufacturer of 
            <span className="text-yellow-400"> Soft Mild Steel Wire</span>
            <span className="block text-2xl md:text-3xl mt-2 text-slate-300">
              (0.6mm - 2mm)
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Precision-drawn wire for industrial applications. 
            Serving mattress, brush, and cable manufacturers across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-yellow-400 text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Get a Quote
            </Link>
            <Link
              to="/products"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-slate-800 transition-all duration-300 text-center"
            >
              View Product Range
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Wire Spool Animation */}
      <div className="absolute bottom-10 right-10 hidden lg:block z-20">
        <div className="w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};
