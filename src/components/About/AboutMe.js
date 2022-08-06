import React, { useEffect } from "react";
import { config, useTransition } from "react-spring";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const AboutMe = ({ animateAbout, setAnimateAbout }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setAnimateAbout(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );
    observer.observe(document.getElementById("about"));
  }, []);

  const transitions = useTransition(animateAbout, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { ...config.slow, duration: 1500 },
  });

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>

      {transitions(
        (styles, item) =>
          item && (
            <SectionText style={styles}>
              I am Mostafa Kamal. <br />
              I've a passion for web development, especially front-end web
              development, modern technologies concerning interactive web page
              experience, and a love of learning.{" "}
            </SectionText>
          )
      )}

      {transitions(
        (styles, item) =>
          item && (
            <SectionText style={styles}>
              I am a self-taught developer willing to learn and enhance my
              experiences in the best way possible, always responsible, and
              committed to my duties.{" "}
            </SectionText>
          )
      )}

      <SectionDivider />
    </Section>
  );
};

export default AboutMe;
