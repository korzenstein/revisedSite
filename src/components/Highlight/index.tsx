import { motion } from "framer-motion";
import styled from "styled-components";

const StaticText = styled(motion.span)`
  position: absolute;
  top: -2px;
  left: 0;
  z-index: 1;
`;

const HighlightStyled = styled(motion.span)`
  position: relative;
  display: inline;
  color: inherit;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
        104deg,
        rgba(254, 203, 72, 0) 0.9%,
        rgba(254, 203, 72, 1.25) 2.4%,
        rgba(254, 203, 72, 0.5) 5.8%,
        rgba(254, 203, 72, 0.1) 93%,
        rgba(254, 203, 72, 0.7) 96%,
        rgba(254, 203, 72, 0) 98%
      ),
      linear-gradient(
        183deg,
        rgba(254, 203, 72, 0) 0%,
        rgba(254, 203, 72, 0.3) 7.9%,
        rgba(254, 203, 72, 0) 15%
      );
    z-index: -1;
    transform-origin: left;
  }
`;

interface HighlightProps {
  delay: number;
  children: any;
  duration: number;
}

const Highlight: React.FC<HighlightProps> = ({ children, delay, duration }) => (
  <span style={{ position: "relative" }}>
    <StaticText>{children}</StaticText>
    <HighlightStyled
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        delay: delay * 0.9,
      }}
    >
      {children}
    </HighlightStyled>
  </span>
);

export default Highlight;
