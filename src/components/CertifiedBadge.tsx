export default function CertifiedBadge() {
  return (
    <div className="flex items-center gap-3 bg-gradient-to-b from-[#E5E7EB] to-[#9CA3AF] p-[1px] rounded-full shadow-lg max-w-fit">
      <div className="bg-rush-dark flex items-center gap-3 px-4 py-2 rounded-full border border-white/10">
        {/* The Shield Icon */}
        <div className="bg-gradient-to-br from-[#D68C45] to-[#854D27] p-1.5 rounded-full shadow-inner">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 1.944A11.94 11.94 0 012.86 5.059a.75.75 0 00-.451.812 12.762 12.762 0 0010.325 11.314.75.75 0 00.532-.612 12.761 12.761 0 00-6.103-11.522.75.75 0 00-.533.612 11.261 11.261 0 016.103 11.522.75.75 0 00.45.812 11.94 11.94 0 017.14-3.115.75.75 0 00.451-.812 12.762 12.762 0 00-10.325-11.314.75.75 0 00-.532.612z" clipRule="evenodd" />
          </svg>
        </div>
        
        <span className="text-[10px] font-black uppercase tracking-[0.15em] italic text-white/90">
          Professional <span className="text-rush-bronze">Rider Certified</span>
        </span>
      </div>
    </div>
  );
}