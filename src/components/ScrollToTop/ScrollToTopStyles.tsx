import { animated } from "react-spring";
import styled from "styled-components";

export const StyledScrollToTop = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: #0f1624;
  color: lightblue;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  box-shadow: 0px 0px 2px lightblue;
  border: 1px solid lightblue;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 30px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
  }
`;

export const StyledAnimatedScrollToTop = styled(StyledScrollToTop)`
  position: fixed;
  right: 20px;
  cursor: pointer;
  z-index: 8888;

  @media ${(props) => props.theme.breakpoints.md} {
    right: 10px;
  }
`;
