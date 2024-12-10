import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: black;
  margin-right: auto;

  p {
    font-size: 1rem;
    line-height: 140%;
  }

  @media (max-width: 768px) {
    width: 82%;
    p {
      font-size: 0.8rem;
      line-height: 140%;
    }
  }
`;

export const HeroImage = styled.div`
  width: 30%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    position: absolute;
    width: 20%;
    right: 0.8rem;
  }
`;

export const IntroText = styled.p`
  margin: 0;
  line-height: 1.7rem;
`;

export const IconSpan = styled.span`
  display: inline-flex;
  position: relative;
  width: 20px;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;
