import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CORPORATE_VALUES } from "../../data/constants";

export function AboutValues() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1a4d2e]/5 text-[#1a4d2e] text-[10px] uppercase tracking-[0.3em] font-bold mb-8">
              Corporate Values
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-light mb-8 leading-tight">
              Built on a Foundation of <span className="font-bold italic">Trust</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
              Our values are not just words on a wall; they are the principles that define our culture and drive our success. We hold ourselves to the highest standards to ensure that every stakeholder—from our clients to our employees—experiences the Raamah difference.
            </p>
            <Button className="rounded-full px-10 py-7 text-[10px] uppercase tracking-widest font-bold border-2 border-black/10 hover:bg-black hover:text-white transition-all bg-transparent text-black">
              Download Corporate Profile
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CORPORATE_VALUES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-[#f9f8f6] border border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#1a4d2e] mb-6 shadow-sm group-hover:bg-[#1a4d2e] group-hover:text-white transition-colors duration-500">
                  <item.icon size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
