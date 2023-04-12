import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  @supports (background: paint(something)) {
    @property --gradient-angle {
      syntax: "<angle>";
      initial-value: 0deg;
      inherits: false;
    }
  }

  @supports not (background: paint(something)) {
    :root {
      --gradient-angle: 0deg;
    }
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding: 2rem;
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }

  a {
    text-decoration: none;
  }

  li{
    list-style: none;
  }

  //Swiper Styles
  .projectsSwiper {
  width: 60%;
  height: 60rem;  
  border-radius: 1rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.md}{
   height: 45rem;
  }

  @media ${(props) => props.theme.breakpoints.sm}{
   height: 30rem;
  }

}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 70%;
  height: auto;
  object-fit: cover;
  object-position: center;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
  }
}

.swiper-button-next,
.swiper-button-prev {
  background-image: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  color: white;
  box-shadow: 0 0 5px black;


  @media ${(props) => props.theme.breakpoints.md} {
    width: 3rem;
    height: 3rem;
  }
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 1.5rem;
  font-weight: 700;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1rem;
  }
}

.swiper-pagination {
   
  @media ${(props) => props.theme.breakpoints.md} {
     display: none;
  }
}

.swiper-pagination-bullet {
  width: 4rem;
  height: 7px;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-image: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
}

.swiper-3d .swiper-slide-shadow {
  background: none;
}

`;

export default GlobalStyles;
