import React, { useEffect } from "react";
import { AiFillCode, AiFillPlayCircle } from "react-icons/ai";
import { RiStackFill } from "react-icons/ri";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  StackTitle,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Button from "../../styles/GlobalComponents/Button";

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
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((project, index) => (
          <BlogCard animateProjects={animateProjects} key={index}>
            <Img src={project.image} loading="lazy" alt="Project" />
            <TitleContent>
              <HeaderThree header>{project.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{project.description}</CardInfo>
            <div>
              <StackTitle>
                Stack
                <RiStackFill size={25} />
              </StackTitle>
              <TagList>
                {project.tags.map((tag, i) => {
                  return <Tag key={i}>{tag}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={project.visit} target="_blank">
                Demo
                <AiFillPlayCircle size={20} />
              </ExternalLinks>
              <ExternalLinks href={project.source} target="_blank">
                Source
                <AiFillCode size={20} />
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>

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
