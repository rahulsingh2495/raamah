import { motion } from "motion/react";
import { ArrowLeft, MapPin, Globe, Leaf, Star, Shield, Trees, Tent, PhoneCall, Footprints, Dumbbell, Baby, ArrowUpDown, Cctv, Flower2, DoorOpen, Droplets, Car, Trash2, Bus, ParkingCircle, User, Container, BatteryCharging, Cloud, Layout, Map as MapIcon, ArrowUpRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ALL_PROPERTIES } from "../../data/constants";
import { FloorPlansSection } from "../sections/FloorPlansSection";

interface ProjectDetailPageProps {
  project: any;
  onBack: () => void;
  onProjectSelect: (project: any) => void;
}

export function ProjectDetailPage({ project, onBack, onProjectSelect }: ProjectDetailPageProps) {
  const getIcon = (amenity: string) => {
    const a = amenity.toLowerCase();
    if (a.includes('gym')) return <Dumbbell size={20} />;
    if (a.includes('pool')) return <Droplets size={20} />;
    if (a.includes('garden')) return <Trees size={20} />;
    if (a.includes('security')) return <Shield size={20} />;
    if (a.includes('play')) return <Baby size={20} />;
    if (a.includes('parking')) return <ParkingCircle size={20} />;
    if (a.includes('charging')) return <BatteryCharging size={20} />;
    if (a.includes('elevator')) return <ArrowUpDown size={20} />;
    if (a.includes('cctv')) return <Cctv size={20} />;
    return <Star size={20} />;
  };

  return (
    <div className="min-h-screen bg-[#f9f8f6] pt-24 lg:pt-32">
      {/* Breadcrumbs */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-muted-foreground/40">
        <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-black transition-colors">Home</a>
        <span>›</span>
        <span>Projects</span>
        <span>›</span>
        <span className="text-black">{project.title}</span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-24">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
          <div className="space-y-8">
            <div className="inline-block px-5 py-2 rounded-full border border-black/10 text-[9px] uppercase tracking-[0.4em] font-black text-muted-foreground/60">
              {project.tag || "Featured Project"}
            </div>
            <h1 className="text-[14vw] lg:text-[12rem] font-serif font-bold leading-[0.75] tracking-tighter flex flex-col">
              <span className="text-black uppercase">{project.title.split(' ')[0]}</span>
              <span className="text-black/5 uppercase -mt-2 lg:-mt-6">{project.title.split(' ').slice(1).join(' ')}</span>
            </h1>
          </div>
          <div className="max-w-xs lg:pb-6">
            <p className="text-sm lg:text-base font-light italic text-muted-foreground/80 leading-relaxed lg:text-right">
              {project.description}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[21/9] rounded-[48px] overflow-hidden shadow-2xl mb-24"
        >
          <img 
            src={project.image} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-black/5 py-12 mb-32">
          {project.highlights?.map((h: any) => (
            <div key={h.label} className="space-y-1">
              <div className="text-[9px] uppercase tracking-widest font-black text-muted-foreground/30">{h.label}</div>
              <div className="text-xl lg:text-2xl font-bold">{h.value}</div>
            </div>
          ))}
          <div className="space-y-1">
            <div className="text-[9px] uppercase tracking-widest font-black text-muted-foreground/30">Starting From</div>
            <div className="text-xl lg:text-2xl font-bold text-[#b89b5e]">{project.price}</div>
          </div>
        </div>

        {/* Vision & Amenities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold">The Vision</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Experience a new standard of luxury living where architectural brilliance meets modern comfort. Every detail is meticulously crafted to ensure a lifestyle of elegance and sophistication.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { icon: <Globe size={24} />, label: "Global Design" },
                { icon: <Leaf size={24} />, label: "Eco Friendly" },
                { icon: <Shield size={24} />, label: "24/7 Security" }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-3xl border border-black/5 flex flex-col gap-4">
                  <div className="text-[#b89b5e]">{item.icon}</div>
                  <div className="text-[10px] uppercase tracking-widest font-black">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#f9f8f6] rounded-[40px] p-10 border border-black/5">
              <h3 className="text-2xl font-bold mb-8">Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.amenities?.map((amenity: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#b89b5e] shadow-sm group-hover:bg-[#b89b5e] group-hover:text-white transition-all">
                      {getIcon(amenity)}
                    </div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floor Plans Section */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b89b5e] mb-4">Space Planning</div>
              <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
                Architectural <br />
                <span className="text-muted-foreground/30">Layouts</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm font-light leading-relaxed">
              Meticulously designed floor plans that optimize space, natural light, and ventilation for a superior living experience.
            </p>
          </div>
          
          <div className="bg-white rounded-[48px] p-8 lg:p-16 shadow-xl border border-black/5">
            <FloorPlansSection project={project} />
          </div>
        </div>

        {/* Visit Request Section */}
        <div className="mb-32">
          <div className="bg-[#1a1a1a] rounded-[48px] overflow-hidden relative min-h-[500px] flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
              <div className="absolute inset-0 p-12 lg:p-20 flex flex-col justify-center space-y-6">
                <h2 className="text-white text-4xl lg:text-6xl font-heading font-light leading-tight">
                  Experience it <br />
                  <span className="font-bold italic">in person</span>
                </h2>
                <p className="text-white/60 font-light max-w-md">
                  Schedule a private tour of the property and witness the architectural brilliance first-hand. Our experts will guide you through every detail.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 p-12 lg:p-20 bg-white flex flex-col justify-center">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Full Name *</label>
                  <input type="text" placeholder="John Doe" className="w-full p-5 rounded-2xl border border-black/5 bg-[#f9f8f6] focus:outline-none focus:border-[#b89b5e]/50 transition-colors text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Email *</label>
                  <input type="email" placeholder="Email Address" className="w-full p-5 rounded-2xl border border-black/5 bg-[#f9f8f6] focus:outline-none focus:border-[#b89b5e]/50 transition-colors text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Phone *</label>
                  <input type="tel" placeholder="Mobile Number" className="w-full p-5 rounded-2xl border border-black/5 bg-[#f9f8f6] focus:outline-none focus:border-[#b89b5e]/50 transition-colors text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Preferred Date</label>
                  <input type="date" className="w-full p-5 rounded-2xl border border-black/5 bg-[#f9f8f6] focus:outline-none focus:border-[#b89b5e]/50 transition-colors text-sm" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full p-5 rounded-2xl border border-black/5 bg-[#f9f8f6] focus:outline-none focus:border-[#b89b5e]/50 transition-colors text-sm resize-none"></textarea>
                </div>
                <Button className="md:col-span-2 rounded-2xl py-8 text-[11px] uppercase tracking-[0.3em] font-bold bg-black hover:bg-black/90 text-white shadow-xl shadow-black/10 mt-4">
                  Request a Visit
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b89b5e] mb-4">Discover More</div>
              <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
                Related <br />
                <span className="text-muted-foreground/30">Projects</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm font-light leading-relaxed">
              Explore other residential masterpieces by Raamah Group that redefine modern living in Vadodara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ALL_PROPERTIES.filter(p => String(p.id) !== String(project.id)).slice(0, 3).map((relatedProject) => (
              <motion.div
                key={relatedProject.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer relative z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  onProjectSelect(relatedProject);
                }}
              >
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6">
                  <img
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute top-6 right-6">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#b89b5e] transition-colors">{relatedProject.title}</h3>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                  <MapPin size={12} className="text-[#b89b5e]" />
                  <span>{relatedProject.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
