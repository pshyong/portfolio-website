import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:pshyong@gmail.com">pshyong@gmail.com</LinkItem>

        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Website Credits</LinkTitle>
          <LinkItem href="https://www.jsmastery.pro/">https://www.jsmastery.pro/</LinkItem>
        </LinkColumn>

      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
