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

const Technologies = ({ animateTechs, setAnimateTechs }) => {
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
    observer.observe(document.getElementById("tech"));
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
