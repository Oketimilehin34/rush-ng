export default function Register() {
  return (
    <main className="min-h-screen bg-rush-dark flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-rush-surface border border-white/5 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-black italic text-white mb-2 uppercase tracking-tight">
          Rider Registration
        </h2>
        <p className="text-rush-gray-text text-sm mb-8">
          Enter your details to begin the verification process.
        </p>

        <form className="space-y-6">
          {/* Driver's License Field */}
          <div>
            <label className="block text-xs font-bold text-rush-bronze uppercase tracking-widest mb-2">
              Driver's License Number
            </label>
            <input 
              type="text" 
              placeholder="Enter License Number"
              className="w-full bg-rush-dark border border-white/10 rounded-lg p-4 text-white focus:border-rush-bronze focus:outline-none transition-all placeholder:text-gray-600"
            />
          </div>

          {/* Vehicle Type Field */}
          <div>
            <label className="block text-xs font-bold text-rush-bronze uppercase tracking-widest mb-2">
              Vehicle Type
            </label>
            <select className="w-full bg-rush-dark border border-white/10 rounded-lg p-4 text-white focus:border-rush-bronze focus:outline-none appearance-none cursor-pointer">
              <option>Motorcycle</option>
              <option>Delivery Van</option>
              <option>Mini-truck</option>
            </select>
          </div>

          {/* Date of Birth Field */}
          <div>
            <label className="block text-xs font-bold text-rush-bronze uppercase tracking-widest mb-2">
              Date of Birth
            </label>
            <input 
              type="date" 
              className="w-full bg-rush-dark border border-white/10 rounded-lg p-4 text-white focus:border-rush-bronze focus:outline-none transition-all"
            />
          </div>
            {/* Upload License Photo Field */}
    <div>
    <label className="block text-xs font-bold text-rush-bronze uppercase tracking-widest mb-2">
        Upload License Photo
    </label>
    
    <div className="relative group cursor-pointer">
        <input 
        type="file" 
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
        accept="image/*"
        />
        <div className="w-full bg-rush-dark border-2 border-dashed border-white/10 rounded-lg p-8 flex flex-col items-center justify-center transition-all group-hover:border-rush-bronze/50 group-hover:bg-rush-surface">
        {/* Upload Icon (Simple SVG) */}
        <svg className="w-8 h-8 text-rush-bronze mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <span className="text-gray-500 text-sm font-medium">↑ File upload here</span>
        <span className="text-gray-700 text-[10px] mt-1 uppercase tracking-tighter italic font-black">
            PNG, JPG up to 5MB
        </span>
        </div>
    </div>
    </div>

          <button className="w-full bg-amber-gradient text-black font-black py-4 rounded-lg uppercase italic shadow-lg hover:opacity-90 transition-all mt-4">
            Proceed to Verification →
          </button>
        </form>
      </div>
    </main>
  );
}