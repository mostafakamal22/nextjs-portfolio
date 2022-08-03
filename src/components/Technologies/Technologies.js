import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
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
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the world of web develpoment.
      From Backend To Design.
    </SectionText>

    <List>
      <ListItem>
        <DiReact size={40} />
        <ListContainer>
          <ListTitle>Front-End Frameworks</ListTitle>
          <ListParagraph>
            Experience With <br />
            ReactJS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size={40} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience With <br />
            NodeJS, Express And MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
