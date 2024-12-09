import React from "react";
import { FooterStyled } from "./styled";
import { useNavigationStore } from "../../store/store";

const Footer: React.FC = () => {
  const { currentSection } = useNavigationStore();
  return (
    <FooterStyled $currentSection={currentSection}>
      <p>© 2024 Stephen Korzenstein.</p>
    </FooterStyled>
  );
};

export default Footer;
