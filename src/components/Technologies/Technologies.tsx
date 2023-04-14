import React, { Dispatch, SetStateAction, useEffect } from "react";
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
  setAnimateTechs: Dispatch<SetStateAction<boolean>>;
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
        I bring a wealth of experience to the table when it comes to web
        development. From back-end programming to design, I have worked with a
        diverse range of technologies and tools to deliver exceptional results
        for my clients.
      </SectionText>

      <List>
        {technologies.map(({ id, title, paragraph, icon }) => (
          <ListItem animateTechs={animateTechs} key={id}>
            <div style={{ flexBasis: "10%" }}>{icon}</div>
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
