import { animated, config, useTransition } from "react-spring";
import styled from "styled-components";

export const Img = styled.img`
  display: block;
  padding: 5px;
  border-radius: 0.5rem;
  width: 100%;
  height: 250px;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 3rem;
  justify-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
const StyledProjectContainer = styled(animated.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
  }
`;

type BlogCardTypes = {
  animateProjects: boolean;
  children: React.ReactNode;
};

export const ProjectContainer = ({
  animateProjects,
  children,
}: BlogCardTypes) => {
  const transitions = useTransition(animateProjects, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { ...config.slow, duration: 750 },
  });

  return transitions(
    (styles, item) =>
      item && (
        <StyledProjectContainer style={styles}>
          {children}
        </StyledProjectContainer>
      )
  );
};

const StyledProjectDescription = styled(animated.div)`
  margin-inline: auto;
  margin-block: 1rem;
  padding: 1rem 0.5rem;
  border: 5px solid lightblue;
  border-radius: 5px;
`;

type ProjectDescriptionProps = {
  children: React.ReactNode;
  showProjectDescription: boolean;
};

export const ProjectDescription = ({
  children,
  showProjectDescription,
}: ProjectDescriptionProps) => {
  const transitions = useTransition(showProjectDescription, {
    from: { opacity: 0, transform: "translateX(-20px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(-20px)" },
    config: { ...config.slow, duration: 500 },
  });

  return transitions(
    (style, item) =>
      item && (
        <StyledProjectDescription style={style}>
          {children}
        </StyledProjectDescription>
      )
  );
};

export const TitleContent = styled.div`
  margin-top: 1rem;
  text-align: center;
  width: 100%;
`;

export const StackTitle = styled(TitleContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  font-size: 2rem;
  margin-top: 1rem;
  text-align: center;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

type HeaderThreeProps = {
  header?: boolean;
};

export const HeaderThree = styled.h3<HeaderThreeProps>`
  font-weight: 700;
  letter-spacing: 2px;
  color: lightblue;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.header ? "3rem" : "2rem")};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.header ? "2.5rem" : "1.5rem")};
  } ;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-size: 1.5rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
    font-size: 1.3rem;
    line-height: 20px;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: #d4c0c0;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
  }
`;

export const ShowPhotosButton = styled(ExternalLinks).attrs({
  as: "button",
})`
  border: none;
  cursor: pointer;
`;

export const TagList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const StyledProjectModal = styled(animated.div)`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 4rem 2rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.3);
`;

export const CloseModalButton = styled(animated.button)`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  outline: none;
  border: 2px solid white;
  border-radius: 4px;
  padding: 2px;
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;
