import { motion } from "motion/react";
import islandImg from "../../assets/island.webp";

export function ShowcaseHero() {
  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-[100vh] bg-[#f5f2ed] overflow-hidden flex flex-col justify-center px-6 lg:px-16 pt-32 pb-16 lg:pt-48 lg:pb-32">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[25vw] font-black text-black/[0.03] leading-none tracking-tighter uppercase whitespace-nowrap">
          RAAMAA
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16 lg:mb-24">
          {/* Main Heading */}
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
            >
              <span className="text-[#3d5a45]">DESIGNED FOR LIVING,</span> <br />
              <span className="text-[#1a1a1a]">BUILT FOR YOU</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md lg:text-right"
          >
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              Experience a blend of contemporary aesthetics and functional design. 
              Our spaces are crafted with precision to elevate your lifestyle and 
              provide a sanctuary that resonates with your unique personality.
            </p>
          </motion.div>
        </div>

        {/* Central Showcase Image */}
        <div className="relative flex justify-center items-center mt-12 lg:mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
            }}
            animate={{ 
              y: [0, -20, 0],
            }}
            // @ts-ignore
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full max-w-7xl"
          >
            <img 
              src={islandImg} 
              alt="Raamah Showcase" 
              className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
