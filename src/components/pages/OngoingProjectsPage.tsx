import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ONGOING_PROJECTS } from "../../data/constants";

interface OngoingProjectsPageProps {
  setCurrentPage: (page: string) => void;
  setSelectedProject: (project: any) => void;
}

export function OngoingProjectsPage({ setCurrentPage, setSelectedProject }: OngoingProjectsPageProps) {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = ONGOING_PROJECTS.filter(project => 
    activeTab === "All" ? true : project.type === activeTab
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-[#f0ede8]"
    >
      {/* Hero Section */}
      <section className="px-6 lg:px-12 mb-24">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[60vh] rounded-[48px] overflow-hidden flex items-center justify-center text-center"
          >
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            <div className="relative z-10 space-y-6 px-6">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[10px] uppercase tracking-[0.5em] font-black text-white/70"
              >
                Our Developments
              </motion.span>
              <h1 className="text-5xl lg:text-8xl font-heading font-light text-white leading-tight">
                Ongoing <span className="font-bold italic">Projects</span>
              </h1>
              <p className="text-white/80 text-lg lg:text-xl font-light max-w-2xl mx-auto">
                Explore our latest architectural marvels currently under development across the globe.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <Tabs defaultValue="All" onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
              <TabsList className="bg-white/50 backdrop-blur-md border border-black/5 p-1 rounded-full h-auto">
                {["All", "Residential", "Commercial", "Sustainable"].map((tab) => (
                  <TabsTrigger 
                    key={tab} 
                    value={tab}
                    className="rounded-full px-8 py-3 text-[10px] uppercase tracking-widest font-bold data-[state=active]:bg-black data-[state=active]:text-white transition-all"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="text-[10px] uppercase tracking-widest font-black">Showing {filteredProjects.length} Projects</span>
                <div className="h-[1px] w-12 bg-black/10" />
              </div>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-6 right-6">
                          <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-white shadow-lg ${
                            project.status === 'Under Construction' ? 'bg-[#b89b5e]' : 'bg-[#1a4d2e]'
                          }`}>
                            {project.status}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8 space-y-6">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#b89b5e]">
                              {project.type}
                            </span>
                            <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                              <MapPin size={12} className="text-[#b89b5e]" />
                              {project.location}
                            </div>
                          </div>
                          <h3 className="text-3xl font-heading font-bold tracking-tight">{project.title}</h3>
                          <p className="text-muted-foreground text-sm font-light leading-relaxed line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        
                        <Button 
                          variant="outline"
                          onClick={() => setSelectedProject(project)}
                          className="w-full rounded-2xl py-6 text-[10px] uppercase tracking-[0.2em] font-bold border-black/10 hover:bg-black hover:text-white transition-all"
                        >
                          View Details
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </motion.div>
  );
}
