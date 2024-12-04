import React from "react";
import {
  NavigationContainer,
  NavButtonToggle,
  NavLink,
  NavList,
  NavButton,
  IconSpan,
  StyledH1,
} from "./styled";
import { useNavigationStore } from "../../store/store";

const Navigation: React.FC = ({}) => {
  const { isNavOpen, toggleNav, setCurrentSection, currentSection } =
    useNavigationStore();

  return (
    <NavigationContainer>
      <StyledH1 currentSection={currentSection}>
        Stephen <span>Korzenstein</span>
      </StyledH1>
      {/* Mobile Nav Toggle Button */}
      <NavButtonToggle onClick={toggleNav}>
        <IconSpan>
          <img src="/assets/ham2.png" alt="Hamburger menu to open navigation" />
        </IconSpan>
        <span>Tap to {isNavOpen ? "close" : "open"} menu</span>
      </NavButtonToggle>

      {/* Navigation Links */}
      <NavList isOpen={isNavOpen}>
        <NavButton onClick={toggleNav}>
          <IconSpan>
            <img
              src="/assets/ham2.png"
              alt="Hamburger menu to close navigation"
            />
          </IconSpan>
          <span>Tap to close menu</span>
        </NavButton>
        <li>
          <NavLink
            isActive={currentSection === "home"}
            currentSection={currentSection}
            onClick={() => {
              setCurrentSection("home");
              toggleNav();
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            isActive={currentSection === "portfolio"}
            currentSection={currentSection}
            onClick={() => {
              setCurrentSection("portfolio");
              toggleNav();
            }}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            isActive={currentSection === "contact"}
            currentSection={currentSection}
            onClick={() => {
              setCurrentSection("contact");
              toggleNav();
            }}
          >
            Contact
          </NavLink>
        </li>
      </NavList>
    </NavigationContainer>
  );
};

export default Navigation;
