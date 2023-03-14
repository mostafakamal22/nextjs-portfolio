import React, { useEffect } from "react";
import { acomplishments } from "../../constants/constants";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

interface AcomplishmentsProps {
  animateAcomplishments: boolean;
  setAnimateAcomplishments(bol: boolean): void;
}

const Acomplishments = ({
  animateAcomplishments,
  setAnimateAcomplishments,
}: AcomplishmentsProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setAnimateAcomplishments(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );
    observer.observe(document.getElementById("Acomplishments") as HTMLElement);
  }, []);

  return (
    <Section id="Acomplishments">
      <SectionTitle>Personal Acomplishments</SectionTitle>
      <Boxes>
        {acomplishments.map(({ number, text }, index) => (
          <Box key={index}>
            <BoxNum animateAcomplishments={animateAcomplishments}>
              {number}
            </BoxNum>
            <BoxText>{text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};
export default Acomplishments;
