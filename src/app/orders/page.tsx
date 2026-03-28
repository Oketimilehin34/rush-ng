"use client";

import { useState } from "react";

export default function OrderPage() {
  // Track which job has been accepted
  const [acceptedId, setAcceptedId] = useState<string | null>(null);

  const orders = [
    { 
      id: "ORD-992", 
      pickup: "Ikeja Computer Village", 
      dropoff: "Victoria Island", 
      price: "₦4,500", 
      type: "Electronics",
      time: "15 mins away"
    },
    { 
      id: "ORD-981", 
      pickup: "Yaba (Tejuosho Market)", 
      dropoff: "Lekki Phase 1", 
      price: "₦3,800", 
      type: "Fashion",
      time: "8 mins away"
    },
    { 
      id: "ORD-975", 
      pickup: "Surulere (National Stadium)", 
      dropoff: "Ikeja (Allen Ave)", 
      price: "₦2,200", 
      type: "Documents",
      time: "22 mins away"
    },
  ];

  const handleAccept = (id: string) => {
    // Only allow accepting if not already accepted
    if (acceptedId === id) return;
    setAcceptedId(id);
  };

  return (
    <main className="min-h-screen bg-rush-dark text-white p-6 md:p-10">
      {/* Header Section */}
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
            Available <span className="text-rush-bronze">Deliveries</span>
          </h1>
          <p className="text-rush-gray-text text-xs uppercase font-bold tracking-[0.2em]">
            Real-time Lagos Network • 3 Active Jobs
          </p>
        </div>
        
        <div className="flex items-center gap-2 bg-rush-surface px-4 py-2 rounded-full border border-white/5">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black uppercase italic text-gray-400">Searching for nearby orders...</span>
        </div>
      </header>

      {/* Orders List */}
      <div className="max-w-5xl space-y-4">
        {orders.map((order) => (
          <div 
            key={order.id} 
            className={`bg-rush-surface border p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 group shadow-2xl ${
              acceptedId === order.id 
              ? "border-green-500/50 bg-green-500/5" 
              : "border-white/5 hover:border-rush-bronze/40 hover:translate-x-1"
            }`}
          >
            {/* Left: Order Info */}
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <span className="bg-rush-bronze/10 text-rush-bronze text-[10px] font-black px-2 py-1 rounded-sm italic uppercase tracking-widest">
                  {order.id}
                </span>
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{order.type}</span>
                <span className="text-rush-gray-text text-[10px] font-bold uppercase">• {order.time}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-[9px] text-gray-500 uppercase font-black tracking-tighter">Pickup Point</p>
                  <p className="text-lg font-bold text-white group-hover:text-rush-bronze transition-colors">
                    {order.pickup}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[9px] text-gray-500 uppercase font-black tracking-tighter">Destination</p>
                  <p className="text-lg font-bold text-white">{order.dropoff}</p>
                </div>
              </div>
            </div>

            {/* Right: Pricing & CTA */}
            <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-4 md:border-l md:border-white/10 md:pl-8">
              <div className="text-right">
                <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">Estimate</p>
                <p className="text-4xl font-black italic text-white leading-none">{order.price}</p>
              </div>

              <button 
                onClick={() => handleAccept(order.id)}
                disabled={acceptedId !== null && acceptedId !== order.id}
                className={`w-full md:w-48 py-4 rounded-xl uppercase italic font-black text-sm transition-all transform active:scale-95 shadow-xl ${
                  acceptedId === order.id 
                    ? "bg-green-600 text-white shadow-[0_0_25px_rgba(22,163,74,0.4)] cursor-default" 
                    : acceptedId !== null 
                      ? "bg-gray-800 text-gray-600 cursor-not-allowed opacity-50"
                      : "bg-amber-gradient text-black hover:shadow-[0_0_20px_rgba(214,140,69,0.4)]"
                }`}
              >
                {acceptedId === order.id ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    Job Accepted
                  </span>
                ) : (
                  "Accept Job →"
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer hint */}
      <p className="mt-8 text-[10px] text-gray-600 text-center uppercase font-bold tracking-[0.3em]">
        Ensure your GPS is active before heading to the pickup point
      </p>
    </main>
  );
}