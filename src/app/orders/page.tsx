export default function OrderPage() {
  const orders = [
    { id: "ORD-992", pickup: "Ikeja Computer Village", dropoff: "Victoria Island", price: "₦4,500", type: "Electronics" },
    { id: "ORD-981", pickup: "Yaba (Tejuosho Market)", dropoff: "Lekki Phase 1", price: "₦3,800", type: "Fashion" },
    { id: "ORD-975", pickup: "Surulere", dropoff: "Ikeja (Allen Ave)", price: "₦2,200", type: "Documents" },
  ];

  return (
    <main className="min-h-screen bg-rush-dark text-white p-6 md:p-10">
      <header className="mb-10">
        <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-2">
          Available <span className="text-rush-bronze">Deliveries</span>
        </h1>
        <p className="text-rush-gray-text text-sm uppercase font-bold tracking-widest">
          Showing 3 active orders in Lagos
        </p>
      </header>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-rush-surface border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-rush-bronze/30 transition-all group shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="bg-rush-bronze/10 text-rush-bronze text-[10px] font-black px-2 py-1 rounded-sm italic uppercase tracking-widest">
                  {order.id}
                </span>
                <span className="text-gray-400 text-xs font-bold uppercase">{order.type}</span>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs text-gray-500 uppercase font-black tracking-tighter">Pickup</p>
                <p className="text-lg font-bold group-hover:text-rush-bronze transition-colors">{order.pickup}</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500 uppercase font-black tracking-tighter">Dropoff</p>
                <p className="text-lg font-bold">{order.dropoff}</p>
              </div>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-4 md:border-l border-white/5 md:pl-8">
              <p className="text-3xl font-black italic text-white">{order.price}</p>
              <button className="bg-amber-gradient text-black font-black px-8 py-3 rounded-lg uppercase italic text-sm shadow-lg hover:scale-105 transition-all">
                Accept Job
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}