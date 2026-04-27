import { motion } from "motion/react";
import { Shield, Leaf } from "lucide-react";

export function AboutWhatWeDo() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-serif font-light leading-tight mb-6"
          >
            Everything Your Vision Needs to <br />
            <span className="font-bold italic text-[#b89b5e]">Become Reality</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground font-light max-w-2xl mx-auto"
          >
            From initial sketches to final construction, our integrated services are built to keep your project connected, organized, and moving forward—together.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[800px]">
          {/* Card 1: Large (Left Top) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-7 relative rounded-[40px] overflow-hidden group cursor-pointer shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <h3 className="text-3xl font-bold mb-4">Holistic Design Studio</h3>
              <p className="text-white/70 font-light max-w-md">
                Our design team works in perfect harmony with engineers to ensure every detail is both beautiful and buildable.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Small (Right Top) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 bg-[#f5f2ed] rounded-[40px] p-10 flex flex-col justify-end group cursor-pointer hover:bg-[#ede8e0] transition-colors shadow-lg"
          >
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#b89b5e] mb-8 shadow-sm group-hover:scale-110 transition-transform">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Precision Engineering</h3>
            <p className="text-muted-foreground font-light">
              Every structure is tested against the most rigorous standards to ensure safety, durability, and performance.
            </p>
          </motion.div>

          {/* Card 3: Small (Left Bottom) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-[#1a4d2e] rounded-[40px] p-10 flex flex-col justify-end group cursor-pointer hover:bg-[#153d24] transition-colors shadow-lg text-white"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#b89b5e] mb-8 shadow-sm group-hover:scale-110 transition-transform">
              <Leaf size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Sustainable Materials</h3>
            <p className="text-white/70 font-light">
              We source the finest eco-friendly materials to build structures that are as kind to the planet as they are to the eye.
            </p>
          </motion.div>

          {/* Card 4: Large (Right Bottom) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 relative rounded-[40px] overflow-hidden group cursor-pointer shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <h3 className="text-3xl font-bold mb-4">Global Project Management</h3>
              <p className="text-white/70 font-light max-w-md">
                Our proprietary tracking system keeps you updated on every milestone, from anywhere in the world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
