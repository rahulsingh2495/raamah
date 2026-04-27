import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PHILOSOPHY } from "../../data/constants";

export function AboutPhilosophy() {
  return (
    <section className="py-32 bg-[#f9f8f6] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a4d2e]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#b89b5e]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#1a4d2e]/5 text-[#1a4d2e] text-[10px] uppercase tracking-[0.3em] font-bold mb-6"
          >
            Our Core
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-serif font-light mb-8">Our <span className="italic font-bold">Philosophy</span></h2>
          <p className="text-muted-foreground font-light max-w-xl mx-auto text-lg leading-relaxed">
            The core values that guide every blueprint, every brick, and every decision we make at Raamah Group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PHILOSOPHY.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ y: -15 }}
              className="relative group"
            >
              <div className="h-full p-12 rounded-[50px] bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col items-start text-left overflow-hidden">
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${item.color} blur-[60px] opacity-30 group-hover:opacity-60 transition-opacity duration-700`} />
                
                <div className="w-20 h-20 rounded-[24px] bg-white shadow-xl flex items-center justify-center text-[#1a4d2e] mb-10 group-hover:scale-110 group-hover:bg-[#1a4d2e] group-hover:text-white transition-all duration-700">
                  <item.icon size={36} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6">{item.title}</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mt-10 pt-10 border-t border-black/5 w-full flex items-center justify-between group-hover:border-[#1a4d2e]/20 transition-colors">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-black/40 group-hover:text-[#1a4d2e] transition-colors">Learn More</span>
                  <ArrowRight size={16} className="text-black/20 group-hover:text-[#1a4d2e] group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
