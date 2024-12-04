import styled, { css } from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 85%;
  padding-top: 2.5rem;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
  }
`;

export const StyledH1 = styled.h1<{ currentSection: string }>`
  display: flex;
  flex-direction: column;
  font-size: 3.2rem;
  line-height: 3.2rem;
  margin: 0;
  text-transform: uppercase;
  transition: color 0.5s ease-in-out;
  color: ${(props) =>
    props.currentSection === "portfolio" ? "white" : "#231f20"};

  @media (max-width: 768px) {
    font-size: 2.4rem;
    line-height: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 2rem;
  }
`;

export const NavList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    background-color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 1000;
    transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
    transition: transform 0.3s ease-in-out;
  }
`;

export const NavButtonToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavLink = styled.a<{
  isActive?: boolean;
  currentSection?: string;
}>`
  text-decoration: none;
  color: ${(props) =>
    props.currentSection === "portfolio"
      ? "white"
      : "#231f20"}; /* Color changes based on currentSection */
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  font-size: 1.2rem;
  transition: color 0.5s ease-in-out, border-bottom 0.5s ease-in-out;

  border-bottom: ${(props) =>
    props.isActive
      ? `1px solid ${
          props.currentSection === "portfolio" ? "white" : "#231f20"
        }`
      : "none"};

  &:hover {
    color: ${(props) =>
      props.currentSection === "portfolio" ? "white" : "#624713"};
  }
`;

export const IconSpan = styled.span`
  img {
    width: 24px;
    height: 24px;
  }
`;
