import { animated, easings, useTransition } from "react-spring";
import styled from "styled-components";

const StyledLeftSection = styled(animated.div)`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

interface LeftSectionProps {
  startAnimation: boolean;
  children: any;
}

export const LeftSection = ({ startAnimation, children }: LeftSectionProps) => {
  const transitions = useTransition(startAnimation, {
    from: { opacity: 0, transform: "translateY(-100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(-100%)" },
    config: {
      duration: 750,
      easing: easings.easeInOutQuart,
    },
  });

  return transitions(
    (styles, item) =>
      item && <StyledLeftSection style={styles}> {children} </StyledLeftSection>
  );
};
