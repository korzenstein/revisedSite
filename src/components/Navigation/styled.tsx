import styled, { css } from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 85%;
  margin-bottom: auto;
  padding-top: 2rem;
`;

export const NavList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    padding: 1rem;
    flex-direction: column;
    width: 100%;
    z-index: 10;

    ${(props) =>
      props.isOpen
        ? css`
            transform: translateX(0%);
            opacity: 1;
          `
        : css`
            transform: translateX(-100%);
            opacity: 0;
          `}
  }
`;

export const NavButtonToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

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

export const NavLink = styled.a<{ isActive?: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.isActive ? "#624713" : "black")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  font-size: 1.2rem;

  &:hover {
    color: #624713;
  }
`;

export const IconSpan = styled.span`
  img {
    width: 24px;
    height: 24px;
  }
`;
