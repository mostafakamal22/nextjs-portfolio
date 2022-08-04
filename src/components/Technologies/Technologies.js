import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
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

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the world of web develpoment.
      From Backend To Design.
    </SectionText>

    <List>
      {technologies.map(({ id, title, paragraph, icon }) => (
        <ListItem key={id}>
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

export default Technologies;
