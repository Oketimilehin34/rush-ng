import CertifiedBadge from "@/components/CertifiedBadge";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-rush-dark text-white p-6 md:p-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-2">
            Welcome, <span className="text-rush-bronze">Amos</span>
          </h1>
          <p className="text-rush-gray-text text-sm uppercase tracking-widest font-bold">
            Rider ID: #22059216
          </p>
        </div>
        
        {/* Using your custom badge here */}
        <CertifiedBadge />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { label: "Daily Earnings", value: "₦25,500", color: "rush-bronze" },
          { label: "Completed Trips", value: "14", color: "white" },
          { label: "Rating", value: "4.9 ★", color: "white" },
        ].map((stat, i) => (
          <div key={i} className="bg-rush-surface border border-white/5 p-6 rounded-xl shadow-xl">
            <p className="text-[10px] uppercase font-black tracking-widest text-rush-gray-text mb-2">
              {stat.label}
            </p>
            <p className={`text-3xl font-black italic ${stat.color === 'rush-bronze' ? 'text-rush-bronze' : 'text-white'}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* "Order" Button to go to the logistics page */}
      <button className="bg-amber-gradient text-black font-black w-full py-5 rounded-xl uppercase italic shadow-2xl hover:scale-[1.01] transition-all">
        View Available Deliveries →
      </button>
    </main>
  );
}