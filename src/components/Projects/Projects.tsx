import { useEffect } from "react";

import { BlogCard } from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { ProjectCarousel } from "./ProjectCarousel";

interface ProjectsProps {
  animateProjects: boolean;
  setAnimateProjects(bool: boolean): void;
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
      <SectionTitle main>Projects</SectionTitle>

      <BlogCard animateProjects={animateProjects}>
        <ProjectCarousel />
      </BlogCard>

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
