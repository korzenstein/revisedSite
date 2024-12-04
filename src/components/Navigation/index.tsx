import React, { useState } from "react";
import {
  NavigationContainer,
  NavButtonToggle,
  NavLink,
  NavList,
  NavButton,
  IconSpan,
} from "./styled";
import { useNavigationStore } from "../../store/store";

const Navigation: React.FC = ({}) => {
  const { isNavOpen, toggleNav, setCurrentSection, currentSection } =
    useNavigationStore();

  return (
    <NavigationContainer>
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "3.2rem",
          lineHeight: "3.2rem",
          margin: "0",
        }}
      >
        Stephen <span>Korzenstein</span>
      </h1>
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
