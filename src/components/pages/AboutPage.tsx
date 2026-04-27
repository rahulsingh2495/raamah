import { useEffect } from "react";
import { AboutHero } from "../about/AboutHero";
import { AboutIntro } from "../about/AboutIntro";
import { AboutPhilosophy } from "../about/AboutPhilosophy";
import { AboutValues } from "../about/AboutValues";
import { AboutWhatWeDo } from "../about/AboutWhatWeDo";
import { AboutLeadership } from "../about/AboutLeadership";
import { AboutMilestones, AboutMilestonesMobile } from "../about/AboutMilestones";
import { BrandEvolution } from "../about/BrandEvolution";

interface AboutPageProps {
  setCurrentPage: (page: string) => void;
}

export function AboutPage({ setCurrentPage }: AboutPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <AboutHero />
      <BrandEvolution />
      <AboutIntro />
      <AboutPhilosophy />
      <AboutValues />
      <AboutWhatWeDo />
      <AboutLeadership />
      <AboutMilestones setCurrentPage={setCurrentPage} />
      <AboutMilestonesMobile setCurrentPage={setCurrentPage} />
    </div>
  );
}
