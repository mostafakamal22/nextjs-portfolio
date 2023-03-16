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

const Header = () => (
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
        <Link href={"#projects"}>
          <NavLink title="Projects">Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"#tech"}>
          <NavLink title="Technologies">Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"#about"}>
          <NavLink title="About">About</NavLink>
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

export default Header;
