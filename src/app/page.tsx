import Link from 'next/link';
export default function Home() {
  return (
  <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6 text-center">
    <div className="max-w-4xl">
        <h2 className="text-[#D68C45] font-bold tracking-[0.2em] mb-4 text-sm uppercase">
          Local Logistics Riders Verification
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight uppercase italic text-white">
          RUSH <span className="text-[#D68C45]">NG</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          The official network for local goods and services. 
          Get certified and handle the city's commercial deliveries.
        </p>

      <Link href="/register" className="z-10">
        <button className="bg-amber-gradient text-black font-black px-10 py-5 rounded-md text-lg uppercase italic shadow-lg hover:scale-105 transition-all cursor-pointer">
          Join Our Elite Local Team →
        </button>
     </Link>
    </div>
  </main>
  );
}