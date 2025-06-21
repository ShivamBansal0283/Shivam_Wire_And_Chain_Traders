import COMPANY_INFO from '@/config';

export const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            {`About ${COMPANY_INFO.name}`}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            Based in Agra, India, {COMPANY_INFO.name} is a trusted manufacturer specializing in 
            high-quality pickled, annealed, and drawn mild steel HB wire. Our precision-engineered 
            wire products range from 0.6mm to 2mm, designed to meet the demanding requirements 
            of industrial applications.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            We take pride in our commitment to quality and reliability, supplying nationwide 
            to B2B clients including mattress manufacturers, brush industries, and cable 
            armouring units.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            With state-of-the-art manufacturing processes and rigorous quality control, 
            Shivam Wires ensures consistent product excellence that our clients can depend on.
          </p>
        </div>
      </div>
    </section>
  );
};
