import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const ringImages = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
  ];

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-24 bg-[#f9f8f6] overflow-hidden">
      {/* Rotating Image Ring Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div 
          style={{ rotate, opacity }}
          className="relative w-[1200px] h-[1200px] flex items-center justify-center"
        >
          {ringImages.map((src, idx) => {
            const angle = (idx / ringImages.length) * (2 * Math.PI);
            const radius = 500; // Distance from center
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.4, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ 
                  position: 'absolute',
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: `translate(-50%, -50%) rotate(${idx * 60}deg)`,
                }}
                className="w-48 lg:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/20 hidden md:block"
              >
                <img 
                  src={src} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile Image Scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto px-6 pb-12 no-scrollbar snap-x snap-mandatory">
        {ringImages.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-48 aspect-[3/4] rounded-2xl overflow-hidden snap-center shadow-lg">
            <img src={src} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        ))}
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-[800px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl p-6 md:p-8 lg:p-12 rounded-[32px] md:rounded-[40px] shadow-2xl shadow-black/5 border border-white"
          >
            <div className="text-center mb-10">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] uppercase tracking-[0.4em] font-black text-[#b89b5e] mb-4 block"
              >
                Contact Us
              </motion.span>
              <h2 className="text-4xl lg:text-5xl font-heading font-light mb-4">
                Let's Build Your <br />
                <span className="font-bold">Future Together</span>
              </h2>
              <p className="text-muted-foreground font-light text-sm max-w-xs mx-auto">
                Our team is ready to guide you through your architectural journey.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-muted-foreground ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#f9f8f6] border border-black/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#b89b5e] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-muted-foreground ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[#f9f8f6] border border-black/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#b89b5e] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-muted-foreground ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full bg-[#f9f8f6] border border-black/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#b89b5e] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-muted-foreground ml-1">Inquiry About</label>
                  <select className="w-full bg-[#f9f8f6] border border-black/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#b89b5e] transition-colors appearance-none cursor-pointer">
                    <option>Residential Development</option>
                    <option>Commercial Space</option>
                    <option>Investment Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-muted-foreground ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-[#f9f8f6] border border-black/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#b89b5e] transition-colors resize-none"
                />
              </div>

              <Button className="w-full rounded-2xl py-8 text-[10px] uppercase tracking-[0.3em] font-bold bg-black hover:bg-black/90 text-white transition-all active:scale-[0.98] shadow-xl shadow-black/10">
                Send Message
              </Button>
            </form>

            <div className="mt-12 pt-10 border-t border-black/5 grid grid-cols-2 gap-8">
              <div>
                <div className="text-[8px] uppercase tracking-widest font-black text-muted-foreground mb-2">Email Us</div>
                <div className="text-sm font-bold">hello@raamah.com</div>
              </div>
              <div>
                <div className="text-[8px] uppercase tracking-widest font-black text-muted-foreground mb-2">Call Us</div>
                <div className="text-sm font-bold">+91 98765 43210</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
