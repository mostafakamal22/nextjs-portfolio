import { Dispatch, SetStateAction, useEffect } from "react";

import { ProjectContainer } from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { ProjectCarousel } from "./ProjectCarousel";

interface ProjectsProps {
  animateProjects: boolean;
  setAnimateProjects: Dispatch<SetStateAction<boolean>>;
}

const Projects = ({ animateProjects, setAnimateProjects }: ProjectsProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setAnimateProjects(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    const projects = document.getElementById("projects")!;
    observer.observe(projects);
  }, []);

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>

      <SectionText>
        Take a closer look at some of the innovative web projects I've had the
        pleasure of working on.
      </SectionText>

      <ProjectContainer animateProjects={animateProjects}>
        <ProjectCarousel />
      </ProjectContainer>

      <SectionDivider />
    </Section>
  );
};

export default Projects;
