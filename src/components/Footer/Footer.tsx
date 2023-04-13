import React from "react";
import { AiFillGithub, AiFillHeart, AiFillLinkedin } from "react-icons/ai";
import { contacts } from "../../constants/constants";
import { SectionTitle } from "../../styles/GlobalComponents";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="contacts">
      <SectionTitle>Contacts</SectionTitle>
      <LinkList>
        {contacts.map(({ title, text, icon, link }, index) => (
          <LinkColumn key={index}>
            <LinkTitle>
              {title}
              {icon}
            </LinkTitle>
            <LinkItem title={title} href={link} target="_blank">
              {text}
            </LinkItem>
          </LinkColumn>
        ))}
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Made With NextJs, TypeScript, Styled Components and{" "}
            <AiFillHeart
              style={{ color: "red", marginBottom: "-5px" }}
              size={20}
            />
          </Slogan>
          <Slogan>MK WebDev ©{new Date().getFullYear()}</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            title="Github Page"
            href="https://github.com/mostafakamal22"
            target="_blank"
          >
            <AiFillGithub size={40} />
          </SocialIcons>

          <SocialIcons
            title="LinkedIn Page"
            href="https://linkedin.com/in/mostafakamal22/"
            target="_blank"
          >
            <AiFillLinkedin size={40} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
