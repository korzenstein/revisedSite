import styled from "styled-components";
import { motion } from "framer-motion";

export const PortfolioSection = styled.section`
  background-size: cover;
`;

export const SectionTitle = styled.h2`
  margin: 1rem 0 1.2rem 0;
`;

export const PortfolioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PortfolioDisplay = styled.div`
  border-radius: 1rem;
  background-image: url(../assets/portBackLight1.png);
  width: 100%;
  min-height: 230px;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Project = styled.div`
  display: flex;
  align-items: center;
  border: none;
  transition: all 1s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    /* align-items: flex-start; */
  }
`;

export const ImgContainer = styled.div<{ $isDimmed: boolean }>`
  max-width: 48%;
  min-width: 250px;
  margin-right: 1.5rem;
  border-radius: 1rem;

  /* aspect-ratio: 16 / 9; */

  img {
    border-radius: 0.4rem;
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: 100px;
    width: auto;
    margin-right: 0rem;
    position: relative;
    cursor: pointer;
    opacity: ${(props) => (props.$isDimmed ? 0.5 : 1)};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 1.2rem;
  gap: 1rem;
  transition: all 0.1s ease-in-out;

  h4 {
    font-family: "Century";
    font-size: 1.1rem;
    margin: 0;
    line-height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    h4 {
      font-size: 0.8rem;
    }
  }
`;

export const DescriptionMobile = styled(motion.p)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 1rem;
    line-height: 1.1rem;
    position: absolute;
    top: 0;
    padding: 1rem;
  }
`;

export const DescriptionDesktop = styled.p`
  font-size: 1.35rem;
  margin: 0;
  line-height: 110%;
  display: block;
  font-weight: 600;
  font-family: "Helvetica";
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: "Helvetica";
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 0.75rem;
    width: 100%;
  }
`;

export const Made = styled.p`
  display: flex;
  white-space: nowrap;
  gap: 1rem;
  font-family: "Helvetica";
  font-size: 1.2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 1rem;
  font-size: 1rem;

  a {
    text-decoration: none;
    color: inherit;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 25%;
  gap: 0 1.2rem;
`;

export const ProjButton = styled.button`
  font-family: "Century";
  font-weight: 700;
  display: inline-block;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  padding: 0.3rem;
  text-align: center;
  opacity: 1;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
