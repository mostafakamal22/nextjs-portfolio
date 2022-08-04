import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const AboutMe = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am Mostafa Kamal. <br />
        I've a passion for web development, especially front-end web
        development, modern technologies concerning interactive web page
        experience, and a love of learning.
      </SectionText>

      <SectionText>
        I am a self-taught developer willing to learn and enhance my experiences
        in the best way possible, always responsible, and committed to my
        duties.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default AboutMe;
