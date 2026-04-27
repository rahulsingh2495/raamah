import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MILESTONES } from "../../data/constants";

export function AboutMilestones({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const smoothX = useSpring(x, { stiffness: 50, damping: 30 });

  return (
    <section ref={sectionRef} id="milestone-section" className="relative h-[400vh] bg-white hidden md:block">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-start pt-10 md:pt-16 lg:justify-center lg:pt-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-4 md:mb-6 lg:mb-12 flex flex-col lg:flex-row justify-between items-end gap-3 md:gap-10 w-full">
          <div className="space-y-1 md:space-y-3">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#b89b5e]/10 text-[#b89b5e] text-[10px] uppercase tracking-[0.3em] font-bold">
              Our Journey
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-6xl font-serif font-light leading-tight">Defining <span className="italic font-bold">Milestones</span></h2>
          </div>
          <div className="flex flex-col items-end gap-2 md:gap-6">
            <p className="text-muted-foreground font-light max-w-md text-right text-[10px] md:text-xs lg:text-base">
              From our first blueprint to our latest global landmark, every year has been a step towards redefining urban living.
            </p>
            <Button 
              onClick={() => setCurrentPage('milestone')}
              variant="outline"
              className="rounded-full px-5 md:px-7 py-2.5 md:py-5 text-[8px] md:text-[9px] lg:text-[10px] uppercase tracking-widest font-bold border-[#b89b5e] text-[#b89b5e] hover:bg-[#b89b5e] hover:text-white transition-all group"
            >
              View Full Journey
              <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <motion.div 
          style={{ x: smoothX }}
          className="flex gap-0 px-[10vw]"
        >
          {MILESTONES.map((milestone, idx) => (
            <div key={milestone.year + idx} className="flex items-center shrink-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                className="relative w-[260px] md:w-[350px] lg:w-[500px] group"
              >
                <div className="absolute top-[45%] lg:top-1/2 left-0 w-full h-[1px] bg-black/5 -translate-y-1/2 z-0" />
                
                <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-white border border-black/5 shadow-2xl flex items-center justify-center mb-3 md:mb-5 lg:mb-12 group-hover:scale-110 group-hover:border-[#b89b5e] transition-all duration-700 relative">
                    <div className="absolute inset-0 rounded-full bg-[#b89b5e]/5 scale-0 group-hover:scale-150 transition-transform duration-1000 opacity-0 group-hover:opacity-100" />
                    <span className="text-base md:text-lg lg:text-2xl font-serif font-bold text-[#1a4d2e] relative z-10">{milestone.year}</span>
                  </div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                    <div className="relative w-44 h-28 md:w-56 md:h-36 lg:w-80 lg:h-56 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden mb-2 md:mb-4 lg:mb-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]">
                      <img 
                        src={milestone.image} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <h3 className="text-sm md:text-lg lg:text-2xl font-serif font-bold mb-1 md:mb-2 lg:mb-3">{milestone.title}</h3>
                    <p className="text-[9px] md:text-[11px] lg:text-sm text-muted-foreground font-light leading-relaxed max-w-[180px] md:max-w-[240px] lg:max-w-[280px] mx-auto">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {idx < MILESTONES.length - 1 && (
                <div className="w-[50px] md:w-[80px] lg:w-[200px] h-[1px] bg-gradient-to-r from-black/5 via-black/20 to-black/5" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function AboutMilestonesMobile({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <section className="py-20 bg-white md:hidden">
      <div className="px-6 space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#b89b5e]/10 text-[#b89b5e] text-[10px] uppercase tracking-[0.3em] font-bold">
              Our Journey
            </div>
            <h2 className="text-3xl font-serif font-light">Defining <span className="italic font-bold">Milestones</span></h2>
          </div>
          <Button 
            onClick={() => setCurrentPage('milestone')}
            variant="ghost"
            className="text-[#b89b5e] p-0 h-auto text-[10px] uppercase tracking-widest font-bold"
          >
            Full Story
            <ArrowRight className="ml-1 w-3 h-3" />
          </Button>
        </div>
        <div className="space-y-16">
          {MILESTONES.slice(-3).reverse().map((milestone, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl font-serif font-bold text-[#b89b5e]">{milestone.year}</span>
                <div className="h-[1px] flex-grow bg-black/5" />
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img src={milestone.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <Button 
              onClick={() => setCurrentPage('milestone')}
              className="w-full rounded-full py-8 text-xs uppercase tracking-widest font-bold bg-[#1a4d2e] text-white shadow-xl shadow-[#1a4d2e]/20"
            >
              View Full Journey
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
