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
  DescriptionDesktop,
  DescriptionMobile,
} from "./styled";
import { StyledH2 } from "../LandingPageContainer/styled";

const animationVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
};

const descriptionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const Portfolio: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleProjectChange = (index: number) => {
    setCurrentProjectIndex(index);
    setIsDescriptionVisible(false);
  };

  const toggleDescription = () => {
    setIsDescriptionVisible((prev) => !prev);
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
                  <ImgContainer
                    isDimmed={isDescriptionVisible}
                    onClick={toggleDescription}
                  >
                    <img
                      src={projects[currentProjectIndex].imgSrc}
                      alt={`${projects[currentProjectIndex].title} website preview`}
                    />
                    {isDescriptionVisible && (
                      <DescriptionMobile
                        key="description"
                        variants={descriptionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        {projects[currentProjectIndex].description}
                      </DescriptionMobile>
                    )}
                  </ImgContainer>
                  <Content>
                    <DescriptionDesktop>
                      {projects[currentProjectIndex].description}
                    </DescriptionDesktop>
                    <ContentDetails>
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
                      <Made>
                        {projects[currentProjectIndex].madeWith.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </Made>
                    </ContentDetails>
                  </Content>
                </Project>
              </motion.div>
            </AnimatePresence>
          </PortfolioDisplay>
          <ButtonContainer>
            {projects.map((project, index) => (
              <ProjButton
                key={project.id}
                id={`proj-${project.id}`}
                name="project"
                onClick={() => handleProjectChange(index)}
              >
                {project.title}
              </ProjButton>
            ))}
          </ButtonContainer>
        </PortfolioContainer>
      </PortfolioSection>
    </GeneralWrapper>
  );
};

export default Portfolio;
