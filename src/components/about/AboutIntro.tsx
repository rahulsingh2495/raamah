import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function AboutIntro() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>
      
      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#1a4d2e]/5 text-[#1a4d2e] text-[10px] uppercase tracking-[0.3em] font-bold">
            Who We Are
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif font-light leading-tight">
            A Legacy of <span className="italic font-bold">Visionary</span> Design
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground font-light leading-relaxed">
            Founded on the principles of integrity and innovation, Raamah Group has evolved from a boutique architectural firm into a global leader in premium real estate. We don't just build structures; we craft environments that inspire, sustain, and endure. Our journey is defined by a relentless pursuit of excellence and a deep respect for the landscapes we transform.
          </p>
          
          <div className="pt-6">
            <Button 
              onClick={() => {
                const milestoneSection = document.getElementById('milestone-section');
                milestoneSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-full px-12 py-8 text-[11px] uppercase tracking-[0.3em] font-bold bg-[#1a4d2e] text-white hover:bg-[#1a4d2e]/90 shadow-xl shadow-[#1a4d2e]/20 transition-all hover:scale-105"
            >
              Explore Our Milestones
            </Button>
          </div>

          <div className="pt-16 flex justify-center gap-12 lg:gap-24">
            <div>
              <div className="text-4xl lg:text-5xl font-serif font-bold text-[#1a4d2e]">15+</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-2">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-serif font-bold text-[#1a4d2e]">120+</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-2">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-serif font-bold text-[#1a4d2e]">12</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-2">Design Awards</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
