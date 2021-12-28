import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaMicrosoft } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked professionally with Microsoft Dynamics 365 Sales and Service, which involves C#, JavaScript, and Power Automate - Cloud Flows. I have some backend experience with Node.js, and I am currently learning frontend technologies such as React and Redux.
    </SectionText>
    <List>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Node.js <br />
            PostgreSQL <br />
            MongoDB <br />

          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FaMicrosoft size="2rem" />
        <ListContainer>
          <ListTitle>Microsoft Dynamics 365</ListTitle>
          <ListParagraph>
            Sales and Service <br />
            Plug-ins with C# <br />
            Web Resources with JavaScript <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FaMicrosoft size="2rem" />
        <ListContainer>
          <ListTitle>Microsoft Power Auotmate</ListTitle>
          <ListParagraph>
            Cloud Flows <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
      
  </Section>
);

export default Technologies;
