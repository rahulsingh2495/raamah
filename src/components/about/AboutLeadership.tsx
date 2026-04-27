import { motion } from "motion/react";
import { Linkedin, Twitter } from "lucide-react";
import { LEADERSHIP } from "../../data/constants";

export function AboutLeadership() {
  return (
    <section className="py-32 bg-[#f0ede8]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6">Our Leadership</h2>
          <p className="text-muted-foreground font-light max-w-xl mx-auto">Meet the visionary minds behind Raamah Group's global success.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEADERSHIP.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden mb-6">
                <img 
                  src={person.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-xs text-white/80 font-light leading-relaxed mb-4">
                    {person.bio}
                  </p>
                  <div className="flex gap-4">
                    <Linkedin size={16} className="text-white/60 hover:text-white cursor-pointer" />
                    <Twitter size={16} className="text-white/60 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-1">{person.name}</h4>
              <p className="text-[10px] uppercase tracking-widest text-[#b89b5e] font-bold">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
