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
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding: 2rem;
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
  --large-desktop: 992px;
  --extra-large-desktops: 1200px;

  .mySwiper {
  width: 100%;
  /* max-width: 35rem; */
  height: 60rem;
  margin: 0;
  /* @media screen and (min-width: var(--large-desktop)) {
    flex-basis: 45%;
    border-radius: 0.5rem;
  }
  @media screen and (min-width: var(extra-large-laptops-desktops)) {
    max-width: 33rem;
    min-height: 20rem;
  } */
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.swiper-button-next,
.swiper-button-prev {
  background-color: $White;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  color: $Black;
  @media screen and (min-width: $large-laptops-desktops) {
    display: none;
  }
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 1rem;
  font-weight: $font-weight-700;
}

.swiper-pagination {
  display: none;
  @media screen and (min-width: $large-laptops-desktops) {
    display: block;
  }
}

.swiper-pagination-bullet {
  width: 4rem;
  height: 4rem;
  text-align: center;
  opacity: 1;
  border-radius: 0px;
  border: 0.125rem solid transparent;
  border-radius: 0.5rem;
  background: transparent;
}

.swiper-pagination-bullet:hover {
  opacity: 0.6;
}

.swiper-pagination-bullet-active {
  border: 0.125rem solid $Orange;
  opacity: 0.6;
}

`;

export default GlobalStyles;
