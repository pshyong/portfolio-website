import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi. I'm Patrick<br />
        
      </SectionTitle>
      <SectionText>
        I'm a software engineer with more than 5 years of technical and leadership experience. 
        
      </SectionText>
      {/* <Button onClick={() => window.location = 'about'}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;