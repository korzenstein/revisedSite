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
import NavHamIcon from "../../assets/ham2.png";

const Navigation: React.FC = ({}) => {
  const { isNavOpen, toggleNav, setCurrentSection, currentSection } =
    useNavigationStore();

  console.log(isNavOpen);
  return (
    <NavigationContainer>
      <StyledH1 $currentSection={currentSection}>
        Stephen <span>Korzenstein</span>
      </StyledH1>
      {/* Mobile Nav Toggle Button */}
      <NavButtonToggle onClick={toggleNav}>
        <IconSpan $currentSection={currentSection}>
          <img src={NavHamIcon} alt="Hamburger menu to open navigation" />
        </IconSpan>
      </NavButtonToggle>

      {/* Navigation Links */}
      <NavList $isOpen={isNavOpen}>
        <li>
          <NavLink
            $isActive={currentSection === "home"}
            $currentSection={currentSection}
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
            $isActive={currentSection === "portfolio"}
            $currentSection={currentSection}
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
            $isActive={currentSection === "contact"}
            $currentSection={currentSection}
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
