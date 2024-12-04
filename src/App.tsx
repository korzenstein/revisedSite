import React, { useState } from "react";
import LandingPage from "./components/LandinPageContainer";

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("home");

  return <LandingPage />;
};

export default App;
{
  /* <div className={styles.bodyContainer}>
        <Header setCurrentSection={setCurrentSection} />
        <main className={styles.main}>
          <section
            className={`${styles.home} ${
              currentSection === "home" ? styles.active : ""
            }`}
          >
            <Home />
          </section>
          <section
            className={`${styles.portfolio} ${
              currentSection === "portfolio" ? styles.active : ""
            }`}
          >
            <Portfolio />
          </section>
          <section
            className={`${styles.contact} ${
              currentSection === "contact" ? styles.active : ""
            }`}
          >
            <Contact />
          </section>
        </main>
        <Footer />
      </div> */
}
