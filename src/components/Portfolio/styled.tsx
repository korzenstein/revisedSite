import styled from "styled-components";

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
  border-radius: 55px;
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
    align-items: flex-start;
  }
`;

export const ImgContainer = styled.div`
  max-width: 30%;
  min-width: 250px;
  margin-right: 1.5rem;
  border-radius: 25px;

  img {
    border-radius: 20px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    max-width: 70%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 1.2rem;
  transition: all 0.1s ease-in-out;

  h4 {
    font-size: 1.1rem;
    margin: 0;
    line-height: 100%;
  }

  p {
    font-size: 1rem;
    margin: 0;
    line-height: 100%;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 0.8rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;

export const ContentDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 9%;
`;

export const Made = styled.div`
  display: flex;
  white-space: nowrap;

  span {
    margin-left: 0.5rem;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: inherit;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  height: 25%;
`;

export const ProjButton = styled.div`
  padding: 0;
`;

export const ProjLabel = styled.label`
  font-family: "Gazpacho";
  font-weight: 700;
  display: inline-block;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  position: relative;
  padding: 0.3rem;
  text-align: center;
  opacity: 1;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
`;
