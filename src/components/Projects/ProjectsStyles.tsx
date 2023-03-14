import { animated, config, useTransition } from "react-spring";
import styled from "styled-components";

export const Img = styled.img`
  display: block;
  padding: 5px;
  border-radius: 1rem;
  width: 100%;
  height: 200px;
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
const StyledBlogCard = styled(animated.div)`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid green;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

type BlogCardTypes = {
  animateProjects: boolean;
  children: React.ReactNode;
};

export const BlogCard = ({ animateProjects, children }: BlogCardTypes) => {
  const transitions = useTransition(animateProjects, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { ...config.slow, duration: 750 },
  });

  return transitions(
    (styles, item) =>
      item && <StyledBlogCard style={styles}> {children} </StyledBlogCard>
  );
};

export const TitleContent = styled.div`
  margin-top: 1rem;
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const StackTitle = styled(TitleContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  font-size: 2rem;
  font-size: 2rem;
  margin-top: 1rem;
  text-align: center;
  z-index: 20;
  width: 100%;
`;

type HeaderThreeProps = {
  header?: boolean;
};

export const HeaderThree = styled.h3<HeaderThreeProps>`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.header ? "3rem" : "2rem")};
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
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
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
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
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
`;
