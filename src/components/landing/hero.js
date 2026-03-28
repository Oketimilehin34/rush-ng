export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-rush-black text-white px-6">
      {/* The Logo Background Effect */}
      <div className="absolute opacity-10 pointer-events-none">
        <h1 className="text-[20rem] font-black italic text-rush-bronze">R</h1>
      </div>

      <div className="max-w-4xl text-center z-10">
        <h2 className="text-rush-bronze text-sm font-bold tracking-[0.3em] mb-4">
          H1 HEADLINE (METALLIC BRONZE)
        </h2>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          "LOCAL LOGISTICS <br /> RIDERS VERIFICATION"
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          The official network for <span className="text-rush-bronze">local Goods and services.</span> 
          Come and verify as a professional. Get certified and be the first to handle the city's commercial deliveries.
        </p>

        {/* The Primary CTA from your Style Guide */}
        <button className="bg-amber-gradient hover:scale-105 transition-transform text-black font-black px-10 py-5 rounded-lg flex items-center gap-3 mx-auto shadow-[0_0_20px_rgba(214,140,69,0.4)]">
          JOIN OUR ELITE LOCAL TEAM <span className="text-xl">→</span>
        </button>
      </div>
    </section>
  );
}