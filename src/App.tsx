import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";

// Layout Components
import { Loader } from "./components/layout/Loader";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

// Page Components
import { HomePage } from "./components/pages/HomePage";
import { MilestonePage } from "./components/pages/MilestonePage";
import { AboutPage } from "./components/pages/AboutPage";
import { OngoingProjectsPage } from "./components/pages/OngoingProjectsPage";
import { ProjectDetailPage } from "./components/pages/ProjectDetailPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial loading simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectSelect = (project: any) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-[#f0ede8] font-sans antialiased selection:bg-black selection:text-white">
      <Loader isLoading={isLoading} />
      
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        setSelectedProject={setSelectedProject}
      />

      <main className="relative">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <motion.div
              key="project-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectDetailPage 
                project={selectedProject} 
                onBack={() => setSelectedProject(null)} 
                onProjectSelect={handleProjectSelect}
              />
            </motion.div>
          ) : (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {currentPage === 'home' && (
                <HomePage 
                  setCurrentPage={setCurrentPage} 
                  onProjectSelect={handleProjectSelect} 
                />
              )}
              {currentPage === 'milestone' && (
                <MilestonePage setCurrentPage={setCurrentPage} />
              )}
              {currentPage === 'about' && (
                <AboutPage setCurrentPage={setCurrentPage} />
              )}
              {currentPage === 'ongoing' && (
                <OngoingProjectsPage 
                  setCurrentPage={setCurrentPage} 
                  setSelectedProject={handleProjectSelect} 
                />
              )}
              {!['home', 'milestone', 'about', 'ongoing'].includes(currentPage) && (
                <div className="min-h-[60vh] flex items-center justify-center p-20">
                  <div className="text-center">
                    <h2 className="text-4xl font-serif mb-4">Page Under Construction</h2>
                    <p className="text-muted-foreground mb-8">The {currentPage} page is currently being refined. Please check back soon.</p>
                    <Button onClick={() => setCurrentPage('home')} className="rounded-full px-10 py-6">
                      Return Home
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
