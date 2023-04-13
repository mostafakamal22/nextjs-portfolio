import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCompass } from "react-icons/di";

import {
  Container,
  LogoText,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  LogoLink,
} from "./HeaderStyles";

const Header = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href") ?? "";
    const element = document.querySelector(href);
    if (element) {
      const offset = 30;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <Div1>
        <Link href="/">
          <LogoLink href="/">
            <DiCompass size={40} /> <LogoText>MK WebDev</LogoText>
          </LogoLink>
        </Link>
      </Div1>

      <Div2>
        <li>
          <Link href="/">
            <NavLink href={"#about"} title="About" onClick={handleClick}>
              About
            </NavLink>
          </Link>
        </li>

        <li>
          <Link href="/">
            <NavLink href={"#tech"} title="Technologies" onClick={handleClick}>
              Technologies
            </NavLink>
          </Link>
        </li>

        <li>
          <Link href="/">
            <NavLink href={"#projects"} title="Projects" onClick={handleClick}>
              Projects
            </NavLink>
          </Link>
        </li>

        <li>
          <Link href="/">
            <NavLink href={"#contacts"} title="Contacts" onClick={handleClick}>
              Contacts
            </NavLink>
          </Link>
        </li>
      </Div2>

      <Div3>
        <SocialIcons
          title="Github Page"
          href="https://github.com/mostafakamal22"
          target="_blank"
        >
          <AiFillGithub size={30} />
        </SocialIcons>

        <SocialIcons
          title="LinkedIn Page"
          href="https://linkedin.com/in/mostafakamal22/"
          target="_blank"
        >
          <AiFillLinkedin size={30} />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
