import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const LogoText = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 5;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: space-between;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 6;
    flex-wrap: wrap;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  display: inline-block;
  position: relative;
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    display: block;
    visibility: hidden;
    width: 0%;
    height: 3px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
  }

  &:hover::after {
    visibility: visible;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

//Social Icons
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
