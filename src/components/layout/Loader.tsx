import { motion, AnimatePresence } from "motion/react";
import { Building2 } from "lucide-react";

export function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[1000] bg-[#f0ede8] flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            {/* Construction Animation */}
            <div className="relative w-24 h-32 mb-8">
              {/* Building Blocks */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    y: [20, 0, 0, -10],
                    scale: [0.8, 1, 1, 0.9]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-12 h-4 bg-[#b89b5e]/20 border border-[#b89b5e]/30 rounded-sm"
                  style={{ bottom: `${i * 18}px` }}
                />
              ))}
              
              {/* Main Building Icon Constructing */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100%", opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
                className="absolute inset-0 flex items-end justify-center overflow-hidden"
              >
                <Building2 className="w-20 h-20 text-[#1a4d2e] mb-4" />
              </motion.div>
            </div>

            {/* Logo & Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl font-serif font-bold text-[#1a4d2e] tracking-tight leading-none">Raamah</span>
                <span className="text-[10px] uppercase tracking-[0.6em] font-black text-[#b89b5e] mt-2">Group</span>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-12 w-48 h-[1px] bg-black/5 relative overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#b89b5e] to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
