import React from "react";
import LarryImage from "../../assets/larry.png";
import HtmlIcon from "../../assets/html.png";
import CSSIcon from "../../assets/css.png";
import GithubIcon from "../../assets/github.png";
import ReactIcon from "../../assets/react.svg";
import JSIcon from "../../assets/curlyBraces.svg";
import {
  Container,
  TextContainer,
  SkillsTitle,
  IntroText,
  Highlight,
  IconSpan,
  HeroImage,
} from "./styled";
import { GeneralWrapper, Section, H2 } from "../LandinPageContainer/styled";

const Home: React.FC = () => (
  <GeneralWrapper>
    <Section>
      <Container>
        <TextContainer>
          <H2>Front-End Web Developer</H2>
          <SkillsTitle>
            <h4>Skills:</h4>
          </SkillsTitle>
          <IntroText>
            <span>
              {`Hi there! I'm Stephen - a front-end developer and avid hiker.
                Coming from the museum + art gallery world, I have an eye for
                clean design and a knack for producing`}
            </span>{" "}
            <Highlight>{`meaningful experiences.`}</Highlight>
            <span>
              {" "}
              Instead of measuring tape and drywall, I now employ semantic html{" "}
            </span>
            <IconSpan>
              <img src={HtmlIcon} alt="html5 icon" />
            </IconSpan>
            <span> {`and easy-to-follow css`} </span>
            <IconSpan>
              <img src={CSSIcon} alt="Css3 icon" />
            </IconSpan>
            {`to sculpt`}
            <Highlight>user-friendly</Highlight>
            {`digital spaces. Collaborating in teams, my process is guided by command line, clear communication and github`}{" "}
            <IconSpan>
              <img src={GithubIcon} alt="Github icon" />
            </IconSpan>
            {`best practices. I'm driven to`}
            <Highlight>problem solve</Highlight>{" "}
            {`thorny questions and find joy in helping others bring complex technical visions to life with React `}{" "}
            <IconSpan>
              <img src={ReactIcon} alt="React icon" />
            </IconSpan>
            {`React atom icon and vanilla Javascript`}
            <IconSpan>
              <img src={JSIcon} alt="JS icon" />
            </IconSpan>
          </IntroText>
        </TextContainer>
        <HeroImage>
          <img src={LarryImage} alt="Friendly wave from a cartoon man" />
        </HeroImage>
      </Container>
    </Section>
  </GeneralWrapper>
);

export default Home;
