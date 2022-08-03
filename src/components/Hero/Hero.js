import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My PORTFOLIO
      </SectionTitle>

      <SectionText>I am Mostafa, a MERN Developer.</SectionText>

      <Button>
        <a style={{ color: "white" }} href="#footer">
          Contact Me
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
