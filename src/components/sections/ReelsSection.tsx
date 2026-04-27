import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { REELS } from "../../data/constants";

export function ReelsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b89b5e] mb-4">Live the Experience</div>
            <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
              Stories from <br />
              <span className="text-muted-foreground/30 text-nowrap">Raamah Group</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-8">
            <p className="text-muted-foreground max-w-sm text-sm font-light leading-relaxed text-right">
              Peek into the lifestyle and architectural details of our finest developments through our curated collection of short cinematic reels.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all bg-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all bg-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto pb-8 no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0"
        >
          {REELS.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex-shrink-0 w-[280px] lg:w-[320px] group cursor-pointer"
              onClick={() => setActiveVideo(reel.video)}
            >
              <div className="relative aspect-[9/16] rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src={reel.thumbnail} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform">
                    <Play fill="currentColor" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-[#b89b5e] mb-2">
                    <MapPin size={10} />
                    {reel.location}
                  </div>
                  <h3 className="text-white text-xl font-bold tracking-tight">{reel.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black flex items-center justify-center p-4 lg:p-12"
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
            <div className="w-full max-w-[500px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl relative">
              <video 
                src={activeVideo} 
                autoPlay 
                controls 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
