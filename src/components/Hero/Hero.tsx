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
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href") ?? "";
    const element = document.querySelector(href);
    if (element) {
      const offset = 30;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section row nopadding>
      <LeftSection startAnimation={startAnimation}>
        <SectionTitle main>
          Discover the
          <br />
          Magic of My
          <br />
          Web Creations
        </SectionTitle>

        <SectionText>
          Hi, I'm Mostafa - MERN Stack Developer and Front-End Web Wizard!
          <br /> I specialize in creating stunning, user-friendly web
          experiences that drive results for businesses and organizations.
        </SectionText>

        <Button>
          <a style={{ color: "white" }} href="#contacts" onClick={handleClick}>
            Let's Connect!
          </a>
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
