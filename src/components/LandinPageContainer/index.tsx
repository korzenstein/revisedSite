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

function LandingPage() {
  const { currentSection } = useNavigationStore();
  return (
    <LandingPageContainer>
      <Navigation />
      <AnimatePresence mode="wait">
        {currentSection === "home" && (
          <motion.div
            key="home"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Home />
          </motion.div>
        )}
        {currentSection === "contact" && (
          <motion.div
            key="contact"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Contact />
          </motion.div>
        )}
        {currentSection === "portfolio" && (
          <motion.div
            key="portfolio"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Portfolio />
          </motion.div>
        )}
      </AnimatePresence>
    </LandingPageContainer>
  );
}

export default LandingPage;
