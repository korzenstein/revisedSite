import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  color: black;
`;

export const HeroImage = styled.div`
  width: 30%; /* Adjust proportionally to match layout */
  max-height: 100%; /* Prevent overflow beyond the parent's height */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto; /* Maintain aspect ratio */
    max-width: 100%; /* Prevent width overflow */
    height: auto; /* Maintain aspect ratio */
    max-height: 100%; /* Prevent height overflow */
    object-fit: contain;
  }
`;

export const IntroText = styled.p`
  margin: 0;
  line-height: 1.7rem;
`;

export const Highlight = styled.span`
  transition: all 1.8s ease-in-out;
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
  padding: 0.1rem 0.2rem;
  -webkit-box-decoration-break: clone;
  margin: 0;
  border-radius: 1px;
  text-shadow: -12px 12px 9.8px rgba(254, 203, 72, 0.7),
    11px -11.1px 7.3px rgba(254, 203, 72, 1),
    -18.1px -27.3px 30px rgba(254, 203, 72, 1);
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
