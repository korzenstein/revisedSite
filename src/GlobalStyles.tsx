import React, { ReactNode } from "react";
import baseStyles from "./styles/BaseStyles.module.css";
import typography from "./styles/Typography.module.css";
import setup from "./styles/Setup.module.css";

interface GlobalStylesProps {
  children: ReactNode;
}

const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => (
  <div
    className={`${baseStyles.bodyContainer} ${setup.global} ${typography.typography}`}
  >
    {children}
  </div>
);

export default GlobalStyles;
