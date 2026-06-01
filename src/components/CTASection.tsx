const CTASection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-12 border border-cyan-500/30 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-10" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Upgrade?
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Pre-order the new Miuyses 3D Laptop and get a free 3D stylus + case.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/30 hover:scale-105 transition">
            Pre-order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;