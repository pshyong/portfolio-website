import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Patrick's Personal Portfolio
      </SectionTitle>
      <SectionText>
        In this website, you will get to know Jiun Yenn (Patrick) Shyong's personal journey to becoming a software engineer, and what he's interested in developing.
        <br /> <br /> All credits of this website goes to Adrian Hajdin - JavaScript Mastery.
      </SectionText>
      {/* <Button onClick={() => window.location = 'about'}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;