import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building2, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "../../data/constants";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setSelectedProject: (project: any) => void;
}

export function Header({ currentPage, setCurrentPage, setSelectedProject }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled 
            ? "bg-white/70 backdrop-blur-xl shadow-sm py-4 border-b border-black/5" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-16">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
              className="flex flex-col items-center leading-none group"
            >
              <div className="flex flex-col items-center">
                <Building2 className="w-6 h-6 text-[#b89b5e] mb-1 transition-transform group-hover:scale-110" />
                <div className="flex flex-col items-center">
                  <span className="text-xl font-serif font-bold text-[#1a4d2e] tracking-tight leading-none">Raamah</span>
                  <span className="text-[7px] uppercase tracking-[0.4em] font-black text-[#b89b5e] mt-0.5">Group</span>
                </div>
              </div>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href="#"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (item.id) {
                        setCurrentPage(item.id);
                        setSelectedProject(null);
                      }
                    }}
                    className="flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden p-2"
                      >
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (subItem.id) {
                                setCurrentPage(subItem.id);
                                setSelectedProject(null);
                              }
                              setActiveDropdown(null);
                            }}
                            className="block px-4 py-3 text-[10px] uppercase tracking-widest font-bold text-muted-foreground hover:text-primary hover:bg-[#f9f8f6] rounded-xl transition-all"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Button className="rounded-full px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-bold shadow-none">
              Inquire Now
            </Button>
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[90] bg-white pt-32 pb-12 px-6 flex flex-col"
          >
            <nav className="flex-1 space-y-8">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="space-y-4">
                  <div className="text-[10px] uppercase tracking-[0.5em] font-black text-[#b89b5e]">{item.label}</div>
                  <div className="flex flex-col gap-4">
                    {item.dropdown ? item.dropdown.map((subItem) => (
                      <a
                        key={subItem.label}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(subItem.id);
                          setSelectedProject(null);
                          setIsMenuOpen(false);
                        }}
                        className="text-2xl font-heading font-light hover:text-[#b89b5e] transition-colors"
                      >
                        {subItem.label}
                      </a>
                    )) : (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(item.id || 'home');
                          setSelectedProject(null);
                          setIsMenuOpen(false);
                        }}
                        className="text-2xl font-heading font-light hover:text-[#b89b5e] transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </nav>
            
            <div className="pt-12 border-t border-black/5 flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f9f8f6] flex items-center justify-center">
                  <Building2 size={20} className="text-[#b89b5e]" />
                </div>
                <div>
                  <div className="text-xs font-bold">Raamah Group</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Architectural Excellence</div>
                </div>
              </div>
              <Button className="w-full rounded-2xl py-8">Contact Our Team</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
