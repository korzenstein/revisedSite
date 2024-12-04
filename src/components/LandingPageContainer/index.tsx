import LandingPageContainer from "./styled";
import Home from "../Home";
import Navigation from "../Navigation";
import Contact from "../Contact";
import Portfolio from "../Portfolio/Portfolio";
import { useNavigationStore } from "../../store/store";
import { AnimatePresence, motion } from "framer-motion";

const sectionVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
};

const sectionBackgroundColors: Record<string, string> = {
  home: "#f8c2cc",
  contact: "#FECB46",
  portfolio: "#27BFD5",
};

type FramerContainerProps = {
  children: React.ReactNode;
  keyName: string;
  variants: Record<string, any>;
};

const FramerContainer: React.FC<FramerContainerProps> = ({
  children,
  keyName,
  variants,
}) => {
  return (
    <motion.div
      style={{ width: "100%" }}
      key={keyName}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

function LandingPage() {
  const { currentSection } = useNavigationStore();
  return (
    <LandingPageContainer
      backgroundColor={sectionBackgroundColors[currentSection] || "#ffffff"}
    >
      <Navigation />
      <AnimatePresence mode="wait">
        {currentSection === "home" && (
          <FramerContainer keyName="home" variants={sectionVariants}>
            <Home />
          </FramerContainer>
        )}
        {currentSection === "contact" && (
          <FramerContainer keyName="contact" variants={sectionVariants}>
            <Contact />
          </FramerContainer>
        )}
        {currentSection === "portfolio" && (
          <FramerContainer keyName="portfolio" variants={sectionVariants}>
            <Portfolio />
          </FramerContainer>
        )}
      </AnimatePresence>
    </LandingPageContainer>
  );
}

export default LandingPage;
