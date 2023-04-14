import { Dispatch, SetStateAction, useEffect } from "react";

import { ProjectContainer } from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
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
        pleasure of working on. Each one showcases my dedication to creating
        stunning, user-friendly web experiences that drive results for
        businesses and organizations.
      </SectionText>

      <ProjectContainer animateProjects={animateProjects}>
        <ProjectCarousel />
      </ProjectContainer>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button>
          <a
            style={{ color: "white" }}
            href="https://mostafakamal22.github.io/#my-work"
            target="_blank"
          >
            More Projects
          </a>
        </Button>
      </div>

      <SectionDivider />
    </Section>
  );
};

export default Projects;
