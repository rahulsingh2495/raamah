import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Map, Overlay } from "pigeon-maps";
import { ArrowUpRight, MapPin, Building2, X } from "lucide-react";
import { CITY_PROPERTIES } from "../../data/constants";

interface PropertyMapSectionProps {
  onProjectSelect: (project: any) => void;
}

export function PropertyMapSection({ onProjectSelect }: PropertyMapSectionProps) {
  const [selectedPin, setSelectedPin] = useState<any>(null);

  return (
    <section className="py-16 px-6 lg:px-12 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b89b5e] mb-4">Prime Locations</div>
            <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
              Our City <br />
              <span className="text-muted-foreground/30">Presence</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm font-light leading-relaxed">
            Every Raamah project is strategically located to ensure maximum connectivity, appreciation, and quality of life for our residents.
          </p>
        </div>

        <div className="relative h-[600px] rounded-[48px] overflow-hidden shadow-2xl border border-black/5">
          <Map 
            defaultCenter={[22.3072, 73.1812]} 
            defaultZoom={12}
            mouseEvents={true}
            touchEvents={true}
          >
            {CITY_PROPERTIES.map((prop) => (
              <Overlay key={prop.id} anchor={prop.coords} offset={[0, 0]}>
                <div className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setSelectedPin(prop)}
                    className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer border-2 border-[#b89b5e] group-hover:bg-[#b89b5e] transition-colors"
                  >
                    <Building2 size={18} className="text-[#b89b5e] group-hover:text-white transition-colors" />
                  </motion.div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {prop.title}
                  </div>
                </div>
              </Overlay>
            ))}
          </Map>

          {/* Floating Property Card on Selection */}
          <AnimatePresence>
            {selectedPin && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="absolute top-8 right-8 w-[350px] bg-white/90 backdrop-blur-xl rounded-[32px] p-6 shadow-2xl border border-white/20 z-50"
              >
                <button 
                  onClick={() => setSelectedPin(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors"
                >
                  <X size={16} />
                </button>
                
                <div className="space-y-6">
                  <div className="aspect-video rounded-2xl overflow-hidden relative">
                    <img src={selectedPin.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest">
                      {selectedPin.tag}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest font-black text-[#b89b5e] mb-1">{selectedPin.type}</div>
                      <h3 className="text-2xl font-bold">{selectedPin.title}</h3>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-1">
                        <MapPin size={12} />
                        {selectedPin.location}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-black/5">
                      <div>
                        <div className="text-[8px] uppercase tracking-widest font-bold text-muted-foreground">Area</div>
                        <div className="text-sm font-bold">{selectedPin.size}</div>
                      </div>
                      <div>
                        <div className="text-[8px] uppercase tracking-widest font-bold text-muted-foreground">Units</div>
                        <div className="text-sm font-bold">{selectedPin.units}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => onProjectSelect(selectedPin)}
                        className="flex-1 bg-black text-white py-4 rounded-2xl text-[10px] uppercase tracking-widest font-bold hover:bg-black/90 transition-all flex items-center justify-center gap-2"
                      >
                        View Project
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
