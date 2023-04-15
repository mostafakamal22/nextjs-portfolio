import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animated, config, useSpring } from "react-spring";

import { StyledAnimatedScrollToTop } from "./ScrollToTopStyles";
import styled from "styled-components";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const springProps = useSpring({
    bottom: isVisible ? "20px" : "-60px",
    opacity: isVisible ? 1 : 0,
    from: { bottom: "-60px", opacity: 0 },
    config: config.wobbly,
  });

  const bounceAnimation = useSpring({
    transform: isVisible ? "translateY(-10px)" : "translateY(0px)",
    config: config.wobbly,
  });

  return (
    <StyledAnimatedScrollToTop style={springProps} onClick={handleClick}>
      <StyledBouncingArrow as={animated.span} style={bounceAnimation}>
        <FaArrowUp size={15} />
      </StyledBouncingArrow>
    </StyledAnimatedScrollToTop>
  );
};

const StyledBouncingArrow = styled.span`
  display: block;
  animation: bounce 0.8s infinite;

  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default ScrollToTop;
