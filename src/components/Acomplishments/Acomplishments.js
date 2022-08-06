import React, { useEffect } from "react";
import { config, useTransition } from "react-spring";
import { acomplishments } from "../../constants/constants";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const Acomplishments = ({
  animateAcomplishments,
  setAnimateAcomplishments,
}) => {
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
    observer.observe(document.getElementById("Acomplishments"));
  }, []);

  return (
    <Section id="Acomplishments">
      <SectionTitle>Personal Acomplishments</SectionTitle>
      <Boxes>
        {acomplishments.map(({ number, text }, index) => (
          <Box key={index}>
            <BoxNum animateAcomplishments={animateAcomplishments}>
              {`+${number}`}{" "}
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
