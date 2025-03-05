import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaMicrosoft } from 'react-icons/fa';
import { GiFlatPlatform, GiTeePipe } from "react-icons/gi";
import { CiServer } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { PiCertificate } from "react-icons/pi";

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Experience</SectionTitle>
    <SectionText>
      I have a proven track record in designing, developing, integrating and deploying technical solutions in large-scale applications and distributed systems, both on-prem and in the cloud.

    </SectionText>
    <SectionText>

      Below is a summary of the techologies that I have worked with, either professionally or personally.
    </SectionText>
    <List>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            JavaScript  <br />
            TypeScript  <br />
            React.js  <br />
            Next.js  <br />
            Selenium  <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <CiServer size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Java Microservices<br />
            Spring Boot  <br />
            C# <br />
            .NET <br />
            Node.js <br />

          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            PostgreSQL <br />
            Oracle DB <br />
            MongoDB <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <GiFlatPlatform size="2rem" />
        <ListContainer>
          <ListTitle>Platform</ListTitle>
          <ListParagraph>
            OpenShift Container Platform <br />
            Kafka Streams  <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>



      <ListItem>
        <FaMicrosoft size="2rem" />
        <ListContainer>
          <ListTitle>Microsoft </ListTitle>
          <ListParagraph>
            Azure - Logic Apps and App Services <br />
            Dynamics 365 - Sales and Service <br />
            PowerPlatform - Cloud Flows
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <CgWebsite size="2rem" />
        <ListContainer>
          <ListTitle>Applications</ListTitle>
          <ListParagraph>
            BMC Remedy ITSM <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiTeePipe size="2rem" />
        <ListContainer>
          <ListTitle>Pipeline</ListTitle>
          <ListParagraph>
            GitLab <br />
            Jenkins <br />
            jFrog Artifactory <br />
            UrbanCode uDeploy <br />
            ArgoCD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <PiCertificate size="2rem" />
        <ListContainer>
          <ListTitle>Certificates</ListTitle>
          <ListParagraph>
            AWS Certified Developer - Associate <br />
            GCP Associate Cloud Engineer <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
