import { Dispatch, SetStateAction, useEffect } from "react";
import { config, useTransition } from "react-spring";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

interface AboutMeProps {
  animateAbout: boolean;
  setAnimateAbout: Dispatch<SetStateAction<boolean>>;
}

const AboutMe = ({ animateAbout, setAnimateAbout }: AboutMeProps) => {
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
    observer.observe(document.getElementById("about") as HTMLElement);
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
              I have a passion for web development, including both front-end and
              back-end technologies, with a particular focus on the MERN stack.
              I love creating modern, interactive web experiences and stay
              up-to-date on the latest tools and techniques to ensure the best
              possible user experience. Learning is a constant priority for me,
              and I am always looking for opportunities to enhance my skills and
              knowledge.
            </SectionText>
          )
      )}

      {transitions(
        (styles, item) =>
          item && (
            <SectionText style={styles}>
              As a self-taught developer, I have a deep appreciation for the
              value of continuous learning and professional growth. I am
              committed to taking on new challenges and expanding my skillset in
              order to deliver the best possible results for my clients. I
              approach every project with a sense of responsibility and
              dedication to excellence.
            </SectionText>
          )
      )}

      <SectionDivider />
    </Section>
  );
};

export default AboutMe;
