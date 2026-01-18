const FlipCard = ({ title, description, icon, bgColor, onLearnMore }) => {
  return (
    <div className="group h-105 perspective-[2000px] cursor-pointer">
      <div className="relative h-full w-full transition-all duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">

        {/* FRONT SIDE */}
        <div className="absolute inset-0 h-full w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-4xl p-10 flex flex-col justify-between [backface-visibility:hidden] shadow-2xl overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full" />
          
          <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-600/40 border border-white/20 relative z-10 animate-float">
            {icon}
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter">
              {title}
            </h3>
            <p className="text-white/80 font-bold leading-relaxed text-sm md:text-base">
              Discover how our AI layers transform your daily interactions into growth.
            </p>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className={`absolute inset-0 h-full w-full rounded-4xl ${bgColor} p-10 text-white transform-[rotateY(180deg)] backface-hidden flex flex-col justify-center shadow-inner border border-white/20`}>
          <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter italic">{title} Mode</h3>
          <p className="text-lg font-bold opacity-90 leading-tight">
            {description}
          </p>

          <div className="mt-8">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onLearnMore();
              }}
              className="bg-white text-orange-600 font-black uppercase tracking-[0.2em] text-[11px] px-8 py-4 rounded-2xl hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-xl"
            >
              Expand Discovery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;