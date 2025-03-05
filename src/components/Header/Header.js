import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '15px;' }}>
          <DiCssdeck size="3rem" /> <Span >Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#tech">
          <NavLink>Experience</NavLink>
        </Link>
      </li>


      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>

    </Div2>

    <Div3>
      <a href="https://drive.google.com/file/d/1S_vrzVKZyvcpPChFjaUsH6McO09jWzAW/view?usp=sharing" target="_blank">
        Resume
      </a>
      <SocialIcons href="https://github.com/pshyong">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/pshyong/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

    </Div3>
  </Container>
);

export default Header;
