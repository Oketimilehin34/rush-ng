"use client";

import { useState } from "react";

export default function OrderPage() {
  const [activeTab, setActiveTab] = useState<"instant" | "waybill">("instant");
  const [acceptedId, setAcceptedId] = useState<string | null>(null);

  const allOrders = [
    { id: "INS-101", category: "instant", pickup: "Ikeja Computer Village", dropoff: "Victoria Island", price: "₦4,500", type: "Bike", time: "Immediate" },
    { id: "WB-502", category: "waybill", pickup: "Oshodi Interchange", dropoff: "Ibadan (Challenge)", price: "₦12,000", type: "Mini-Van", time: "Scheduled: 2PM" },
    { id: "INS-102", category: "instant", pickup: "Yaba", dropoff: "Lekki Phase 1", price: "₦3,800", type: "Bike", time: "Immediate" },
    { id: "WB-505", category: "waybill", pickup: "Alaba International", dropoff: "Onitsha Main Market", price: "₦45,000", type: "Truck", time: "Departs: 5AM" },
  ];

  const filteredOrders = allOrders.filter(order => order.category === activeTab);

  const handleAction = (id: string) => {
    if (acceptedId === id) {
      // If already accepted, this click will CANCEL
      const confirmCancel = confirm("Are you sure you want to cancel this order? This might affect your rider rating.");
      if (confirmCancel) setAcceptedId(null);
    } else {
      // Otherwise, ACCEPT the job
      setAcceptedId(id);
    }
  };

  return (
    <main className="min-h-screen bg-rush-dark text-white p-6 md:p-10">
      <header className="mb-8">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-4">
          Order <span className="text-rush-bronze">Terminal</span>
        </h1>

        <div className="flex gap-2 p-1 bg-rush-surface border border-white/5 rounded-xl max-w-sm">
          {["instant", "waybill"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex-1 py-3 rounded-lg text-[10px] font-black uppercase italic tracking-widest transition-all ${
                activeTab === tab ? "bg-amber-gradient text-black" : "text-gray-500"
              }`}
            >
              {tab === "instant" ? "Instant Delivery" : "Waybilling"}
            </button>
          ))}
        </div>
      </header>

      <div className="max-w-5xl space-y-4">
        {filteredOrders.map((order) => (
          <div 
            key={order.id} 
            className={`bg-rush-surface border p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all ${
              acceptedId === order.id ? "border-green-500/30 ring-1 ring-green-500/20" : "border-white/5"
            }`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-black text-rush-bronze uppercase bg-rush-bronze/10 px-2 py-1 italic">{order.id}</span>
                <span className="text-[10px] text-gray-500 uppercase font-bold">• {order.type}</span>
                {acceptedId === order.id && (
                  <span className="text-[10px] text-green-400 uppercase font-black animate-pulse italic">• Active Job</span>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-[9px] text-gray-600 uppercase font-black mb-1">Origin</p>
                  <p className="text-lg font-bold">{order.pickup}</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-600 uppercase font-black mb-1">Destination</p>
                  <p className="text-lg font-bold">{order.dropoff}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-4 md:border-l md:border-white/10 md:pl-8">
              <p className="text-3xl font-black italic text-white">{order.price}</p>
              
              <button 
                onClick={() => handleAction(order.id)}
                disabled={acceptedId !== null && acceptedId !== order.id}
                className={`w-full md:w-44 py-3 rounded-lg font-black italic text-xs uppercase transition-all shadow-xl ${
                  acceptedId === order.id 
                    ? "bg-red-600/20 text-red-500 border border-red-500/50 hover:bg-red-600 hover:text-white" 
                    : acceptedId !== null
                      ? "bg-gray-800 text-gray-600 cursor-not-allowed grayscale"
                      : "bg-amber-gradient text-black hover:scale-105"
                }`}
              >
                {acceptedId === order.id ? "Cancel Request" : "Accept Job"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}