import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "./project";
import { GeneralWrapper } from "../LandingPageContainer/styled";
import {
  PortfolioSection,
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

const animationVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
};

const Portfolio: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleProjectChange = (index: number) => {
    setCurrentProjectIndex(index);
  };

  return (
    <GeneralWrapper>
      <PortfolioSection>
        <StyledH2 style={{ color: "white", borderBottom: "2px white solid" }}>
          Portfolio
        </StyledH2>
        <PortfolioContainer>
          <PortfolioDisplay>
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[currentProjectIndex].id}
                variants={animationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Project>
                  <ImgContainer>
                    <a href={projects[currentProjectIndex].liveLink}>
                      <img
                        src={projects[currentProjectIndex].imgSrc}
                        alt={`${projects[currentProjectIndex].title} website preview`}
                      />
                    </a>
                  </ImgContainer>
                  <Content>
                    <h4>{projects[currentProjectIndex].title}</h4>
                    <p>{projects[currentProjectIndex].description}</p>
                    <ContentDetails>
                      <Made>
                        <p>
                          Made with:{" "}
                          {projects[currentProjectIndex].madeWith.map(
                            (tech) => (
                              <span key={tech}>{tech}</span>
                            )
                          )}
                        </p>
                      </Made>
                      <LinkContainer>
                        {projects[currentProjectIndex].githubLink && (
                          <a href={projects[currentProjectIndex].githubLink}>
                            GitHub Repo
                          </a>
                        )}
                        <a href={projects[currentProjectIndex].liveLink}>
                          Live Link
                        </a>
                      </LinkContainer>
                    </ContentDetails>
                  </Content>
                </Project>
              </motion.div>
            </AnimatePresence>
          </PortfolioDisplay>
          <ButtonContainer>
            {projects.map((project, index) => (
              <ProjButton key={project.id}>
                <ProjLabel
                  htmlFor={`proj-${project.id}`}
                  onClick={() => handleProjectChange(index)}
                >
                  {project.title.toLowerCase()}
                </ProjLabel>
                <RadioInput
                  id={`proj-${project.id}`}
                  name="project"
                  checked={currentProjectIndex === index}
                  onChange={() => handleProjectChange(index)}
                />
              </ProjButton>
            ))}
          </ButtonContainer>
        </PortfolioContainer>
      </PortfolioSection>
    </GeneralWrapper>
  );
};

export default Portfolio;
