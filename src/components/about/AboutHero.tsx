import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ABOUT_HERO_IMAGES } from "../../data/constants";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#f5f2ed]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-block mb-8"
        >
          <div className="px-5 py-2 rounded-full bg-[#1a4d2e]/5 text-[#1a4d2e] text-[11px] uppercase tracking-[0.4em] font-black">
            Our Legacy
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-8xl font-serif font-light leading-[1.1] tracking-tight mb-8"
        >
          Streamline Your Vision, <br />
          <span className="font-bold italic">Supercharge Your Living</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg lg:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-12"
        >
          All-in-one partner to plan, design, and build — <br className="hidden md:block" />
          faster and smarter architectural excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button className="rounded-full px-12 py-8 text-[11px] uppercase tracking-[0.3em] font-bold bg-black text-white hover:bg-black/90 shadow-2xl shadow-black/20 group">
            Get Started Today
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>

      {/* Curved Image Carousel */}
      <div className="relative w-full max-w-[1800px] mx-auto px-4 lg:px-10 py-10 overflow-hidden">
        <div className="flex justify-center items-center gap-4 lg:gap-8 [perspective:2000px]">
          {ABOUT_HERO_IMAGES.map((item, idx) => {
            // Calculate rotation based on position relative to center
            const centerIdx = (ABOUT_HERO_IMAGES.length - 1) / 2;
            const diff = idx - centerIdx;
            const rotation = diff * 15; // 15 degrees per step
            const translateZ = Math.abs(diff) * -50; // Move back as we go away from center
            const translateY = Math.abs(diff) * 20; // Slight arc up

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, rotateY: rotation }}
                animate={{ opacity: 1, y: 0, rotateY: rotation }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 0, 
                  translateZ: 50,
                  transition: { duration: 0.4 } 
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${rotation}deg) translateZ(${translateZ}px) translateY(${translateY}px)`
                }}
                className="relative w-[180px] lg:w-[280px] aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl border border-white/20 cursor-pointer group"
              >
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-[8px] uppercase tracking-widest font-black text-white/60 mb-1">{item.location}</div>
                  <h4 className="text-sm font-bold leading-tight">{item.title}</h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h3 className="text-xl font-bold">Real-Time Collaboration</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Communicate seamlessly and keep everyone in sync with built-in messaging, file sharing, and live updates.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center space-y-4"
          >
            <h3 className="text-xl font-bold">Task & Project Tracking</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Assign tasks, set deadlines, and visualize progress with boards, lists, and timelines tailored to your team's style.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-4"
          >
            <h3 className="text-xl font-bold">Performance Insights</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Make smarter decisions with analytics that show productivity trends, bottlenecks, and team workload balance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
