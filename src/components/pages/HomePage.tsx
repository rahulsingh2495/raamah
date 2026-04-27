import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import { 
  Building2, ArrowRight, Users, MessageSquare, Star, 
  ArrowUpRight, MapPin, ChevronDown, Search, Globe, 
  Leaf, ChevronLeft, ChevronRight, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter } from "../common/Counter";
import { ReelsSection } from "../sections/ReelsSection";
import { PropertyMapSection } from "../sections/PropertyMapSection";
import { ContactSection } from "../sections/ContactSection";
import { AboutMilestones, AboutMilestonesMobile } from "../about/AboutMilestones";
import { 
  PROPERTIES, TESTIMONIALS, PROPERTY_TYPES, LOCATIONS 
} from "../../data/constants";

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  onProjectSelect: (project: any) => void;
}

export function HomePage({ setCurrentPage, onProjectSelect }: HomePageProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(PROPERTIES);
  const [selectedInGridId, setSelectedInGridId] = useState<number | null>(PROPERTIES[0]?.id || null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  const bgY = useTransform(heroScrollYProgress, [0, 1], ["0%", isMobile ? "5%" : "15%"]);
  const bgScale = useTransform(heroScrollYProgress, [0, 1], [1, isMobile ? 1.05 : 1.1]);
  const bgBlur = useTransform(heroScrollYProgress, [0, 1], ["blur(0px)", isMobile ? "blur(2px)" : "blur(4px)"]);
  const midY = useTransform(heroScrollYProgress, [0, 1], ["0%", isMobile ? "-3%" : "-10%"]);
  const midX = useTransform(heroScrollYProgress, [0, 1], ["0%", isMobile ? "1%" : "2%"]);
  const fgY = useTransform(heroScrollYProgress, [0, 1], ["0%", isMobile ? "-2%" : "-5%"]);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(0, springConfig);
  const mouseYSpring = useSpring(0, springConfig);
  const rotateX = useTransform(mouseYSpring, [-1, 1], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-1, 1], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (clientY - innerHeight / 2) / (innerHeight / 2);
    mouseXSpring.set(x);
    mouseYSpring.set(y);
  };

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      const filtered = PROPERTIES.filter(prop => {
        const typeMatch = !selectedType || prop.type === selectedType;
        const locationMatch = !selectedLocation || prop.location.toLowerCase().includes(selectedLocation.toLowerCase());
        return typeMatch && locationMatch;
      });
      setSearchResults(filtered);
      if (filtered.length > 0) {
        setSelectedInGridId(filtered[0].id);
      } else {
        setSelectedInGridId(null);
      }
      setIsSearching(false);
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 600);
  };

  const nextTestimonial = useCallback(() => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isHoveringCarousel) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHoveringCarousel, nextTestimonial]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#f0ede8]">
      <main>
        <div ref={heroRef} className="max-w-[1600px] mx-auto p-4 lg:p-8 pt-24 lg:pt-32">
          {/* Main Floating Container */}
          <div className="relative min-h-[calc(100vh-8rem)] bg-white rounded-[32px] shadow-2xl shadow-black/5 flex flex-col overflow-visible">
            {/* Content Area */}
            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden md:overflow-visible">
              {/* LEFT PANEL */}
              <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col justify-center px-6 md:px-12 lg:px-16 py-10 md:py-16 lg:py-20">
                <motion.div
                  style={{ y: isMobile ? 0 : fgY }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6 md:space-y-10 will-change-transform"
                >
                  <div className="space-y-4 md:space-y-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light leading-[1.1] tracking-tight">
                      Architectural <br />
                      <span className="font-bold">Excellence</span> <br />
                      Redefined.
                    </h1>
                    <p className="text-sm md:text-lg text-muted-foreground font-light leading-relaxed max-w-md">
                      We craft bespoke living spaces that harmonize modern luxury with sustainable innovation. Each structure is a testament to functional artistry.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 md:gap-6">
                    <Button onClick={() => {
                      const resultsSection = document.getElementById('results-section');
                      resultsSection?.scrollIntoView({ behavior: 'smooth' });
                    }} className="group rounded-full px-8 md:px-10 py-6 md:py-7 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold bg-[#1a1a1a] hover:bg-black transition-all">
                      Explore Projects
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  {/* Stats Row */}
                  <div className="flex flex-wrap items-center gap-6 md:gap-8 lg:gap-12 pt-2 md:pt-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-lg md:text-xl font-heading font-bold">
                        <Users size={16} className="text-muted-foreground" />
                        100M+
                      </div>
                      <div className="text-[8px] md:text-[9px] uppercase tracking-widest font-black text-muted-foreground/60">Buyers</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-lg md:text-xl font-heading font-bold">
                        <MessageSquare size={16} className="text-muted-foreground" />
                        40M+
                      </div>
                      <div className="text-[8px] md:text-[9px] uppercase tracking-widest font-black text-muted-foreground/60">Reviews</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-lg md:text-xl font-heading font-bold">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        4.6
                      </div>
                      <div className="text-[8px] md:text-[9px] uppercase tracking-widest font-black text-muted-foreground/60">Rating</div>
                    </div>
                  </div>

                  {/* Small Featured Card */}
                  <motion.div 
                    style={{ y: isMobile ? 0 : midY, x: isMobile ? 0 : midX }}
                    whileHover={{ y: -5 }}
                    className="p-3 md:p-4 bg-[#f9f8f6] rounded-2xl border border-black/5 flex items-center gap-3 md:gap-4 max-w-xs cursor-pointer group shadow-sm hover:shadow-md transition-shadow will-change-transform"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden shadow-inner">
                      <img 
                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-[8px] md:text-[9px] uppercase tracking-widest font-black text-muted-foreground mb-0.5 md:mb-1">New Listing</div>
                      <div className="text-xs md:text-sm font-bold">The Obsidian Villa</div>
                      <div className="text-[9px] md:text-[10px] text-muted-foreground">Malibu, California</div>
                    </div>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                      <ArrowUpRight size={12} />
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* RIGHT PANEL */}
              <div className="w-full lg:w-[55%] min-h-[400px] md:min-h-[500px] lg:min-h-0 p-4 lg:p-6">
                <motion.div 
                  onMouseMove={handleMouseMove}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full rounded-[24px] overflow-hidden group [perspective:1000px]"
                >
                  <motion.div 
                    style={{ 
                      y: isMobile ? 0 : bgY, 
                      scale: bgScale,
                      filter: bgBlur,
                      rotateX: isMobile ? 0 : rotateX,
                      rotateY: isMobile ? 0 : rotateY,
                    }}
                    className="w-full h-full will-change-transform"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Floating Location Card */}
                  <motion.div 
                    style={{ y: isMobile ? 0 : midY, x: isMobile ? 0 : midX }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 md:top-6 lg:top-10 left-4 md:left-6 lg:left-10 p-2 md:p-3 bg-white/90 backdrop-blur-xl rounded-xl md:rounded-2xl shadow-2xl flex items-center gap-2 md:gap-3 border border-white/20 z-20 will-change-transform"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1512641406448-6574e7753748?q=80&w=1974&auto=format&fit=crop" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="pr-2 md:pr-4">
                      <div className="text-[7px] md:text-[8px] uppercase tracking-widest font-black text-muted-foreground">Location</div>
                      <div className="text-[10px] md:text-xs font-bold flex items-center gap-1">
                        Melbourne, Australia
                        <MapPin size={8} className="text-primary" />
                      </div>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-black text-white flex items-center justify-center">
                      <ArrowRight size={12} />
                    </div>
                  </motion.div>

                  {/* Bottom Overlay Content */}
                  <motion.div 
                    style={{ y: isMobile ? 0 : fgY }}
                    className="absolute bottom-4 md:bottom-6 lg:bottom-10 left-4 md:left-6 lg:left-10 right-4 md:left-6 lg:right-10 space-y-4 md:space-y-6 lg:space-y-8 z-20 will-change-transform"
                  >
                    <div className="max-w-xs md:max-w-md">
                      <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-heading font-light leading-tight">
                        Experience the pinnacle of <br />
                        <span className="font-bold italic">modern living</span> in every detail.
                      </h3>
                    </div>

                    {/* Search Bar UI */}
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-1.5 md:p-2 rounded-[20px] md:rounded-[24px] flex flex-col items-center gap-1.5 md:gap-2 relative">
                      {/* Property Type Dropdown */}
                      <div className="relative flex-1 w-full">
                        <div 
                          onClick={() => {
                            setIsTypeDropdownOpen(!isTypeDropdownOpen);
                            setIsLocationDropdownOpen(false);
                          }}
                          className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group"
                        >
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                            <Building2 size={16} />
                          </div>
                          <div className="flex-1">
                            <div className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] font-black text-white/60">Property Type</div>
                            <div className="text-xs md:text-sm font-bold text-white flex items-center justify-between">
                              {selectedType || "Select Property Type"}
                              <ChevronDown size={12} className={`text-white/40 transition-transform duration-300 ${isTypeDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>
                          </div>
                        </div>
                        
                        <AnimatePresence>
                          {isTypeDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute bottom-full mb-4 left-0 w-full bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden z-50"
                            >
                              <div className="p-2">
                                <button
                                  onClick={() => { setSelectedType(null); setIsTypeDropdownOpen(false); }}
                                  className="w-full text-left px-4 py-3 rounded-xl text-sm hover:bg-[#f0ede8] transition-colors"
                                >
                                  All Types
                                </button>
                                {PROPERTY_TYPES.map(type => (
                                  <button
                                    key={type}
                                    onClick={() => { setSelectedType(type); setIsTypeDropdownOpen(false); }}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors ${selectedType === type ? 'bg-black text-white' : 'hover:bg-[#f0ede8]'}`}
                                  >
                                    {type}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="w-[1px] h-10 bg-white/10 hidden md:block" />

                      {/* Location Input/Dropdown */}
                      <div className="relative flex-1 w-full">
                        <div 
                          onClick={() => {
                            setIsLocationDropdownOpen(!isLocationDropdownOpen);
                            setIsTypeDropdownOpen(false);
                          }}
                          className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group"
                        >
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                            <MapPin size={16} />
                          </div>
                          <div className="flex-1">
                            <div className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] font-black text-white/60">Location</div>
                            <input 
                              type="text"
                              placeholder="Select or search location"
                              value={selectedLocation}
                              onChange={(e) => setSelectedLocation(e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                              className="bg-transparent border-none outline-none text-xs md:text-sm font-bold text-white placeholder:text-white/40 w-full"
                            />
                          </div>
                        </div>

                        <AnimatePresence>
                          {isLocationDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute bottom-full mb-4 left-0 w-full bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden z-50"
                            >
                              <div className="p-2 max-h-60 overflow-y-auto">
                                <button
                                  onClick={() => { setSelectedLocation(""); setIsLocationDropdownOpen(false); }}
                                  className="w-full text-left px-4 py-3 rounded-xl text-sm hover:bg-[#f0ede8] transition-colors"
                                >
                                  All Locations
                                </button>
                                {LOCATIONS.filter(loc => loc.toLowerCase().includes(selectedLocation.toLowerCase())).map(loc => (
                                  <button
                                    key={loc}
                                    onClick={() => { setSelectedLocation(loc); setIsLocationDropdownOpen(false); }}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors ${selectedLocation === loc ? 'bg-black text-white' : 'hover:bg-[#f0ede8]'}`}
                                  >
                                    {loc}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <Button 
                        onClick={handleSearch}
                        disabled={isSearching}
                        className="w-full md:w-auto rounded-xl md:rounded-2xl px-8 md:px-12 py-5 md:py-8 bg-white text-black hover:bg-[#f0ede8] transition-all font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] relative overflow-hidden"
                      >
                        {isSearching ? (
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Search size={isMobile ? 14 : 18} />
                          </motion.div>
                        ) : "Search"}
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <section id="results-section" className="py-16 px-6 lg:px-12 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-heading font-light">
                  {selectedType ? `${selectedType} Projects` : "Explore Our Projects"}
                </h2>
                <p className="text-muted-foreground text-lg">
                  Showing {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} 
                  {selectedLocation && ` in ${selectedLocation}`}
                </p>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="bg-[#f0ede8] p-1 rounded-full flex items-center gap-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2.5 rounded-full transition-all duration-300 ${viewMode === 'grid' ? 'bg-white text-black shadow-sm' : 'text-muted-foreground hover:text-black'}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2.5 rounded-full transition-all duration-300 ${viewMode === 'list' ? 'bg-white text-black shadow-sm' : 'text-muted-foreground hover:text-black'}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                  </button>
                </div>
                <div className="h-[1px] w-24 bg-black/10 hidden md:block" />
                <span className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Curated Selection</span>
              </div>
            </div>

            <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-4"}>
              <AnimatePresence mode="popLayout">
                {searchResults.length > 0 ? (
                  searchResults.map((prop) => (
                    <motion.div
                      key={prop.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className={`group cursor-pointer transition-all duration-500 ${
                        selectedInGridId === prop.id ? 'shadow-2xl scale-[1.02] z-10' : 'shadow-sm'
                      } ${viewMode === 'list' ? 'flex items-center gap-6 p-4 bg-white rounded-2xl hover:bg-[#f9f8f6]' : ''}`}
                      onClick={() => {
                        setSelectedInGridId(prop.id);
                        onProjectSelect(prop);
                      }}
                    >
                      {viewMode === 'grid' ? (
                        <>
                          <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6">
                            <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                            <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] uppercase tracking-widest font-black shadow-sm">{prop.tag}</div>
                          </div>
                          <div className="space-y-2 px-2">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] uppercase tracking-widest font-black text-muted-foreground/60">{prop.type}</span>
                              <span className="text-sm font-bold">{prop.price}</span>
                            </div>
                            <h3 className="text-2xl font-heading font-medium tracking-tight">{prop.title}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm"><MapPin size={14} />{prop.location}</div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                            <img src={prop.image} alt={prop.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-xl font-heading font-medium tracking-tight truncate">{prop.title}</h3>
                              <span className="px-2 py-0.5 bg-[#f0ede8] rounded text-[8px] uppercase tracking-widest font-black text-muted-foreground">{prop.tag}</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1.5"><MapPin size={14} />{prop.location}</div>
                              <div className="flex items-center gap-1.5"><Building2 size={14} />{prop.type}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <span className="text-sm font-bold hidden sm:block">{prop.price}</span>
                            <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all"><ArrowRight size={18} /></div>
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center">No projects found.</div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <PropertyMapSection onProjectSelect={onProjectSelect} />

        {/* Stats Strip */}
        <section className="py-12 lg:py-16 bg-[#f9f8f6] border-y border-black/5 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
              <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8">
                <span className="text-[9px] uppercase tracking-[0.4em] font-black text-primary/40 whitespace-nowrap">By the Numbers</span>
                <div className="h-4 w-[1px] bg-black/10 hidden md:block" />
                <div className="flex items-center gap-3 opacity-60">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full border border-white bg-[#f0ede8] overflow-hidden">
                        <img src={`https://picsum.photos/seed/user${i}/50/50`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] font-medium tracking-tight">Trusted by <span className="font-bold">3,000+ clients</span></p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
                {[
                  { number: "3,000", suffix: "+", label: "Happy Clients" },
                  { number: "45", suffix: "+", label: "Projects" },
                  { number: "20", suffix: "+", label: "Years" },
                  { number: "40", suffix: "M+", label: "Sq. Ft." }
                ].map((stat, idx) => (
                  <motion.div key={idx} className="flex flex-col items-center lg:items-start gap-1">
                    <div className="text-2xl lg:text-3xl font-heading font-bold flex items-center">
                      <Counter value={parseInt(stat.number.replace(',', ''))} />
                      <span className="text-primary ml-0.5">{stat.suffix}</span>
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.2em] font-black text-muted-foreground/50 whitespace-nowrap">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AboutMilestones setCurrentPage={setCurrentPage} />
        <AboutMilestonesMobile setCurrentPage={setCurrentPage} />

        {/* Philosophy */}
        <section className="py-16 lg:py-24 bg-[#f9f8f6]">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
              <div className="max-w-2xl space-y-4">
                <span className="text-[10px] uppercase tracking-[0.5em] font-black text-primary/40">Our Philosophy</span>
                <h2 className="text-4xl lg:text-6xl font-serif font-light leading-tight">Crafting the Future <br /> of Living</h2>
              </div>
              <p className="max-w-md text-muted-foreground font-light lg:text-right">
                Our studio combines visionary architecture with deep environmental consciousness. We believe that luxury and sustainability are the twin pillars of modern excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <motion.div whileHover={{ y: -5 }} className="md:col-span-7 lg:col-span-8 bg-black text-white p-10 lg:p-16 rounded-[32px] flex flex-col justify-between min-h-[400px]">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center"><Globe className="text-white" size={32} /></div>
                  <h3 className="text-4xl lg:text-5xl font-serif font-medium">Building Sustainable <br /> Futures Globally</h3>
                </div>
                <div><div className="text-6xl lg:text-8xl font-serif font-bold opacity-20">50+</div><p className="text-white/60 uppercase tracking-widest text-xs font-bold mt-2">Projects Delivered</p></div>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="md:col-span-5 lg:col-span-4 bg-white p-10 rounded-[32px] shadow-sm flex flex-col justify-center items-center text-center space-y-4 border border-black/5">
                <div className="flex gap-1">{[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill={i <= 4 ? "#b89b5e" : "transparent"} className={i <= 4 ? "text-[#b89b5e]" : "text-black/10"} />)}</div>
                <div className="text-5xl font-serif font-bold">4.8/5</div><p className="text-muted-foreground uppercase tracking-widest text-[10px] font-black">Client Satisfaction Rating</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="md:col-span-6 lg:col-span-4 bg-white p-10 rounded-[32px] shadow-sm space-y-6 border border-black/5">
                <div className="w-12 h-12 rounded-2xl bg-[#f9f8f6] flex items-center justify-center text-primary"><Globe size={24} /></div>
                <h4 className="text-2xl font-serif font-medium">Innovation</h4>
                <p className="text-sm text-muted-foreground font-light">Pushing the boundaries of structural design through advanced computational modeling and material science.</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="md:col-span-6 lg:col-span-4 bg-white p-10 rounded-[32px] shadow-sm space-y-6 border border-black/5">
                <div className="w-12 h-12 rounded-2xl bg-[#f9f8f6] flex items-center justify-center text-primary"><Leaf size={24} /></div>
                <h4 className="text-2xl font-serif font-medium">Sustainability</h4>
                <p className="text-sm text-muted-foreground font-light">Regenerative principles embedded in every project, aiming for net-zero impact and biodiversity restoration.</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="md:col-span-12 lg:col-span-4 bg-[#b89b5e] text-white p-10 rounded-[32px] flex flex-col justify-center space-y-2">
                <div className="text-4xl font-serif font-bold">100M+</div><p className="text-white/80 uppercase tracking-widest text-[10px] font-black">Sq. Ft. Built & Delivered</p>
                <div className="h-[1px] w-full bg-white/20 my-4" /><p className="text-sm font-light italic">"Trusted by thousands of families across the globe."</p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-[#f9f8f6] overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.5em] font-black text-primary/40">Our Reviews</span>
                <h2 className="text-4xl lg:text-5xl font-serif font-light">What Our <span className="text-[#b89b5e]">Clients</span> Say</h2>
              </div>
              <div className="flex gap-4">
                <button onClick={prevTestimonial} className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all bg-white"><ChevronLeft size={24} /></button>
                <button onClick={nextTestimonial} className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all bg-white"><ChevronRight size={24} /></button>
              </div>
            </div>

            <div className="relative" onMouseEnter={() => setIsHoveringCarousel(true)} onMouseLeave={() => setIsHoveringCarousel(false)}>
              <div className="overflow-visible">
                {/* Mobile Carousel */}
                <motion.div animate={{ x: `-${testimonialIndex * (100 / TESTIMONIALS.length)}%` }} transition={{ type: "spring", stiffness: 150, damping: 25 }} style={{ width: `${TESTIMONIALS.length * 100}%` }} className="flex gap-6 lg:hidden">
                  {TESTIMONIALS.map((testimonial) => (
                    <div key={testimonial.id} style={{ width: `calc(${100 / TESTIMONIALS.length}% - 1.5rem)` }} className="flex-shrink-0 bg-white p-8 rounded-[40px] space-y-8 border border-black/5 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-5">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#f9f8f6] shadow-lg"><img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
                          <div><div className="text-[10px] uppercase tracking-[0.3em] font-black text-[#b89b5e] mb-1">{testimonial.project}</div><div className="font-bold text-lg leading-none">{testimonial.name}</div></div>
                        </div>
                        <Quote size={48} className="text-[#b89b5e]/10" />
                      </div>
                      <p className="text-xl font-serif font-light italic">"{testimonial.content}"</p>
                    </div>
                  ))}
                </motion.div>

                {/* Desktop Carousel */}
                <div className="hidden lg:block overflow-visible">
                  <motion.div animate={{ x: `-${testimonialIndex * (100 / TESTIMONIALS.length)}%` }} transition={{ type: "spring", stiffness: 150, damping: 25 }} style={{ width: `${(TESTIMONIALS.length / 3) * 100}%` }} className="flex gap-8">
                    {TESTIMONIALS.map((testimonial) => (
                      <motion.div key={testimonial.id} style={{ width: `calc(${100 / TESTIMONIALS.length}% - 2rem)` }} whileHover={{ y: -10 }} className="flex-shrink-0 bg-white p-12 rounded-[48px] space-y-8 border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#f9f8f6] shadow-xl"><img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
                            <div><div className="text-[10px] uppercase tracking-[0.4em] font-black text-[#b89b5e] mb-2">{testimonial.project}</div><div className="font-bold text-2xl leading-none">{testimonial.name}</div></div>
                          </div>
                          <Quote size={56} className="text-[#b89b5e]/10" />
                        </div>
                        <p className="text-2xl font-serif font-light italic">"{testimonial.content}"</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ReelsSection />
        <ContactSection />
      </main>
    </div>
  );
}
