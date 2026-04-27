import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FLOOR_PLANS_DATA } from "../../data/constants";

export function FloorPlansSection({ project }: { project: any }) {
  const [activePlanId, setActivePlanId] = useState(FLOOR_PLANS_DATA[0]?.id);
  const activePlan = FLOOR_PLANS_DATA.find(p => p.id === activePlanId) || FLOOR_PLANS_DATA[0];

  if (!activePlan) return null;

  return (
    <div className="flex flex-col h-full">
      {/* Tabs on Top */}
      <div className="flex flex-nowrap gap-2 mb-12 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
        {FLOOR_PLANS_DATA.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setActivePlanId(plan.id)}
            className={`px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all whitespace-nowrap ${
              activePlanId === plan.id
                ? "bg-black text-white shadow-lg"
                : "bg-[#f9f8f6] text-muted-foreground hover:bg-[#f0ede8]"
            }`}
          >
            {plan.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">
        {/* Floor Plan Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlan.id + "-image"}
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: 20 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square lg:aspect-[4/5] bg-[#f9f8f6] rounded-[32px] overflow-hidden border border-black/5 group"
          >
            <img
              src={activePlan.image}
              alt={activePlan.title}
              className="w-full h-full object-contain p-0 lg:p-8 transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            
            {/* Zoom Button */}
            <button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-black hover:scale-110 transition-transform">
              <Search size={20} />
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Details / Specs */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlan.id + "-details"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.4em] font-black text-[#b89b5e]">Floor Plan</div>
              <h3 className="text-4xl lg:text-5xl font-heading font-bold tracking-tight">{activePlan.title}</h3>
            </div>

            <div className="space-y-6">
              {activePlan.stats?.map((stat, idx) => (
                <div 
                  key={stat.label} 
                  className={`flex items-center justify-between py-4 border-b border-black/5 ${
                    stat.highlight ? "bg-black/5 -mx-4 px-4 rounded-xl mt-4" : ""
                  }`}
                >
                  <span className={`text-[10px] uppercase tracking-widest font-bold ${
                    stat.highlight ? "text-black" : "text-muted-foreground"
                  }`}>
                    {stat.label}
                  </span>
                  <span className={`text-lg font-medium ${
                    stat.highlight ? "text-black font-bold" : "text-black"
                  }`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <Button className="w-full rounded-2xl py-7 text-[10px] uppercase tracking-[0.3em] font-bold bg-black hover:bg-black/90 text-white shadow-xl shadow-black/10">
              Download Brochure
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
