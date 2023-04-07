import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

interface HeroProps {
  startAnimation: boolean;
}

const Hero = ({ startAnimation }: HeroProps) => {
  return (
    <Section row nopadding>
      <LeftSection startAnimation={startAnimation}>
        <SectionTitle main>
          Welcome To <br />
          My PORTFOLIO
        </SectionTitle>

        <SectionText>
          I am Mostafa, a MERN Stack Developer & Front-End Web Developer.
        </SectionText>

        <Button>
          <a style={{ color: "white" }} href="#footer">
            Contact Me
          </a>
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
