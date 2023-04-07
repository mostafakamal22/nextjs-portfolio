import React, { useEffect } from "react";
import { technologies } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

type TechProps = {
  animateTechs: boolean;
  setAnimateTechs(bool: boolean): any;
};

const Technologies = ({ animateTechs, setAnimateTechs }: TechProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setAnimateTechs(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );
    const tech = document.getElementById("tech")!;
    observer.observe(tech);
  }, []);
  return (
    <Section id="tech">
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the world of web
        develpoment. From Backend To Design.
      </SectionText>

      <List>
        {technologies.map(({ id, title, paragraph, icon }) => (
          <ListItem animateTechs={animateTechs} key={id}>
            {icon}
            <ListContainer>
              <ListTitle>{title}</ListTitle>
              <ListParagraph>
                Experience With <br />
                {paragraph}
              </ListParagraph>
            </ListContainer>
          </ListItem>
        ))}
      </List>
      <SectionDivider />
    </Section>
  );
};
export default Technologies;
