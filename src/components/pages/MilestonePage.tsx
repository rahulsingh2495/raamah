import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MILESTONES } from "../../data/constants";

export function MilestonePage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-64 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#b89b5e]" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#b89b5e]">Our Journey</span>
            <div className="w-12 h-[1px] bg-[#b89b5e]" />
          </div>
          <h1 className="text-7xl lg:text-[12rem] font-serif font-bold leading-none mb-12 tracking-tighter">
            milestones
          </h1>
          <p className="text-xl text-white/40 font-light max-w-2xl leading-relaxed">
            We are a creative collective of visionary developers, architects, and designers, 
            shaping the skyline of Vadodara since 2015.
          </p>
        </motion.div>

        {/* Floating Images */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, -100]) }}
          className="absolute -top-20 left-20 w-48 h-64 rounded-2xl overflow-hidden opacity-20 hidden lg:block"
        >
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, 150]) }}
          className="absolute top-40 right-40 w-64 h-80 rounded-2xl overflow-hidden opacity-30 hidden lg:block"
        >
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
      </div>

      {/* Story Timeline */}
      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Central Path SVG */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 hidden lg:block">
          <motion.div 
            style={{ scaleY: pathLength, originY: 0 }}
            className="w-full h-full bg-[#b89b5e] shadow-[0_0_20px_rgba(184,155,94,0.5)]"
          />
        </div>

        <div className="space-y-32 lg:space-y-64 relative z-10">
          {MILESTONES.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-1/2 px-12 text-center lg:text-left"
                >
                  <div className={`flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.1, rotateZ: isEven ? 5 : -5 }}
                      className="text-6xl lg:text-8xl font-serif font-bold text-[#b89b5e] mb-6 cursor-default"
                    >
                      {milestone.year}
                    </motion.div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">{milestone.title}</h3>
                    <p className="text-lg text-white/50 font-light leading-relaxed max-w-md">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>

                {/* Path Node */}
                <div className="relative flex items-center justify-center w-12 h-12 hidden lg:flex">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="w-4 h-4 rounded-full bg-[#b89b5e] shadow-[0_0_15px_rgba(184,155,94,0.8)] relative z-20"
                  />
                  <div className="absolute w-8 h-8 rounded-full border border-[#b89b5e]/20 animate-ping" />
                  
                  {/* Arrow pointing down to next milestone */}
                  {idx < MILESTONES.length - 1 && (
                    <motion.div
                      style={{ opacity: useTransform(scrollYProgress, [idx / MILESTONES.length, (idx + 0.5) / MILESTONES.length], [0, 1]) }}
                      className="absolute top-12 text-[#b89b5e]"
                    >
                      <ArrowDown size={20} />
                    </motion.div>
                  )}
                </div>

                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-1/2 px-12"
                >
                  <div className="relative group">
                    <div className="aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
                      <img 
                        src={milestone.image} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Parallax Floating Element */}
                    <motion.div 
                      whileInView={{ y: [20, -20] }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      className="absolute -bottom-10 -right-10 bg-[#b89b5e] text-black px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hidden lg:block"
                    >
                      {milestone.year}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-64 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <h2 className="text-5xl lg:text-7xl font-serif italic">The journey continues...</h2>
          <Button 
            onClick={() => setCurrentPage('home')}
            className="rounded-full px-16 py-8 text-[11px] uppercase tracking-[0.4em] font-bold bg-[#b89b5e] text-white hover:bg-[#a68a50] transition-all"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
