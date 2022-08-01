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
        Welcome to <br />
        my PORTFOLIO
      </SectionTitle>

      <SectionText>I Am a MERN Developer.</SectionText>

      <Button>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
