import React from "react";
import { GeneralWrapper } from "../LandingPageContainer/styled";
import {
  PortfolioSection,
  SectionTitle,
  PortfolioContainer,
  PortfolioDisplay,
  Project,
  ImgContainer,
  Content,
  ContentDetails,
  Made,
  LinkContainer,
  ButtonContainer,
  ProjButton,
  ProjLabel,
  RadioInput,
} from "./styled";
import { StyledH2 } from "../LandingPageContainer/styled";

const projects = [
  {
    id: "canadiana",
    title: "Encyclopedia Canadiana",
    description:
      "A simple, bilingual encyclopedia with a database powered by React.js + a custom REST API. This beautiful site stitches together Canadian facts and images in a vintage Encyclopedia aesthetic.",
    madeWith: ["React", "Sass", "API"],
    imgSrc: "./assets/canada.png",
    liveLink: "https://canadaencylco.netlify.app/",
    githubLink: "https://github.com/korzenstein/canadaDay",
  },
  {
    id: "galerielock",
    title: "Galerie Lock",
    description:
      "A custom, responsive site built to document exhibitions at an independent contemporary art gallery in Montreal.",
    madeWith: ["HTML5", "CSS3", "Sass", "JavaScript"],
    imgSrc: "./assets/galerieLock.png",
    liveLink: "https://www.galerielock.com/",
    githubLink: "https://github.com/korzenstein/Galerie_Lock",
  },
  // Additional projects here
];

const Portfolio: React.FC = () => (
  <GeneralWrapper>
    <PortfolioSection id="portfolio">
      <StyledH2 style={{ color: "white", borderBottom: "2px white solid" }}>
        Portfolio
      </StyledH2>
      <PortfolioContainer>
        <PortfolioDisplay>
          {projects.map((project) => (
            <Project key={project.id} className="display">
              <ImgContainer>
                <a href={project.liveLink}>
                  <img
                    src={project.imgSrc}
                    alt={`${project.title} website preview`}
                  />
                </a>
              </ImgContainer>
              <Content>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <ContentDetails>
                  <Made>
                    <p>
                      Made with:{" "}
                      {project.madeWith.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </p>
                  </Made>
                  <LinkContainer>
                    <a href={project.githubLink}>GitHub Repo</a>
                    <a href={project.liveLink}>Live Link</a>
                  </LinkContainer>
                </ContentDetails>
              </Content>
            </Project>
          ))}
        </PortfolioDisplay>
        <ButtonContainer>
          {projects.map((project, index) => (
            <ProjButton key={project.id}>
              <ProjLabel htmlFor={`proj-${project.id}`}>
                {project.title.toLowerCase()}
              </ProjLabel>
              <RadioInput
                id={`proj-${project.id}`}
                name="project"
                defaultChecked={index === 0}
              />
            </ProjButton>
          ))}
        </ButtonContainer>
      </PortfolioContainer>
    </PortfolioSection>
  </GeneralWrapper>
);

export default Portfolio;
