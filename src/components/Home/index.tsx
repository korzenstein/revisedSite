import React from "react";
import LarryImage from "../../assets/larry.png";
import HtmlIcon from "../../assets/html.png";
import CSSIcon from "../../assets/css.png";
import GithubIcon from "../../assets/github.png";
import ReactIcon from "../../assets/react.svg";
import JSIcon from "../../assets/curlyBraces.svg";
import Highlight from "../Highlight";
import {
  Container,
  TextContainer,
  IntroText,
  IconSpan,
  HeroImage,
} from "./styled";
import {
  GeneralWrapper,
  Section,
  StyledH2,
} from "../LandingPageContainer/styled";

const Home: React.FC = () => (
  <GeneralWrapper>
    <Section>
      <Container>
        <TextContainer>
          <StyledH2>Front-End Web Developer</StyledH2>
          <IntroText>
            {`Hi there! I'm Stephen - a front-end developer and avid hiker.
                Coming from the museum + art gallery world, I have an eye for
                clean design and a knack for producing `}
            <Highlight
              duration={0.7}
              delay={7}
            >{`meaningful experiences.`}</Highlight>{" "}
            {`Instead of
            measuring tape and drywall, I now employ NextJS `}
            <IconSpan>
              <img src={HtmlIcon} alt="html5 icon" />
            </IconSpan>
            {` and easy-to-follow css`}
            <IconSpan>
              <img src={CSSIcon} alt="Css3 icon" />
            </IconSpan>
            {`to sculpt `}
            <Highlight duration={0.2} delay={5}>{`user-friendly`}</Highlight>
            {` digital spaces. Collaborating in teams, my process is guided by command line, clear communication and github`}{" "}
            <IconSpan>
              <img src={GithubIcon} alt="Github icon" />
            </IconSpan>
            {`best practices. I'm driven to `}
            <Highlight
              duration={0.5}
              delay={0.5}
            >{` problem solve`}</Highlight>{" "}
            {`thorny questions and find joy in helping others bring complex technical visions to life with React `}{" "}
            <IconSpan>
              <img src={ReactIcon} alt="React icon" />
            </IconSpan>
            {` and vanilla Javascript`}
            <IconSpan>
              <img src={JSIcon} alt="JS icon" />
            </IconSpan>
          </IntroText>
        </TextContainer>
        <HeroImage>
          <img src={LarryImage} alt="Cartoon man" />
        </HeroImage>
      </Container>
    </Section>
  </GeneralWrapper>
);

export default Home;
