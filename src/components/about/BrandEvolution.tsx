import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

export function BrandEvolution() {
  const [isNew, setIsNew] = useState(true);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1a4d2e]/5 text-[#1a4d2e] text-[10px] uppercase tracking-[0.3em] font-bold">
              Brand Evolution
            </div>
            <h2 className="text-4xl lg:text-6xl font-serif font-light leading-tight">
              A New Era of <br />
              <span className="font-bold italic text-[#b89b5e]">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Our brand has evolved to reflect our growing global footprint and our commitment to modern architectural standards. The transition from our classic logo to the new, minimalist identity symbolizes our journey from tradition to innovation.
            </p>
            <div className="flex gap-6 pt-4">
              <Button 
                onClick={() => setIsNew(false)}
                className={`rounded-full px-8 py-6 text-[10px] uppercase tracking-widest font-bold transition-all ${!isNew ? 'bg-black text-white' : 'bg-transparent text-black border border-black/10 hover:bg-black/5'}`}
              >
                Classic Heritage
              </Button>
              <Button 
                onClick={() => setIsNew(true)}
                className={`rounded-full px-8 py-6 text-[10px] uppercase tracking-widest font-bold transition-all ${isNew ? 'bg-[#1a4d2e] text-white' : 'bg-transparent text-black border border-black/10 hover:bg-black/5'}`}
              >
                Modern Vision
              </Button>
            </div>
          </motion.div>

          <div className="relative flex items-center justify-center h-[400px] lg:h-[600px]">
            <div className="absolute inset-0 bg-[#f0ede8] rounded-[60px] transform rotate-3 scale-95 opacity-50" />
            <div className="absolute inset-0 bg-[#f0ede8] rounded-[60px] transform -rotate-2" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={isNew ? 'new' : 'old'}
                initial={{ opacity: 0, scale: 0.8, rotate: isNew ? 5 : -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.2, rotate: isNew ? -5 : 5 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-white rounded-full shadow-2xl flex items-center justify-center p-10 border border-black/5">
                  {isNew ? (
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-[#1a4d2e] rounded-full mb-4 flex items-center justify-center text-white font-serif text-4xl font-bold">R</div>
                      <span className="text-2xl font-serif font-bold tracking-[0.2em] text-[#1a4d2e]">RAAMAH</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center opacity-60">
                      <div className="w-24 h-24 border-4 border-[#1a4d2e] rotate-45 mb-4 flex items-center justify-center">
                        <span className="text-3xl font-serif font-bold text-[#1a4d2e] -rotate-45">RG</span>
                      </div>
                      <span className="text-xl font-serif font-light tracking-[0.3em] text-[#1a4d2e]">RAAMAH GROUP</span>
                    </div>
                  )}
                </div>
                <div className="mt-12 text-center">
                  <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#b89b5e] mb-2">
                    {isNew ? 'Current Identity' : 'Our Roots'}
                  </div>
                  <div className="text-2xl font-serif italic">
                    {isNew ? 'Innovation & Future' : 'Heritage & Foundation'}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
