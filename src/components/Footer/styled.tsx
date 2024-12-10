import styled from "styled-components";

export const FooterStyled = styled.footer<{ $currentSection: string }>`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  text-align: center;
  z-index: 100;

  p {
    font-size: 0.6rem;
    padding: 0.5rem;
    margin: 0;
    transition: 0.4s ease-in-out color;
    color: ${(props) =>
      props.$currentSection === "portfolio" ? "white" : "black"};
  }
`;
