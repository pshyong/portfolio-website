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
        In this website, you will get to know Patrick Shyong's personal jorney to becoming a software developer, and what he's interested in building.
      </SectionText>
      <Button onClick={() => window.location = 'https//:google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;