import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  color: #231f20;
  width: 100%;
  align-items: start;
  position: relative;
  height: 100%;
`;

export const ContactText = styled.div`
  display: flex;
  width: 45%;

  p {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  @media (max-width: 768px) {
    width: auto;
    max-width: 90%;

    p {
      font-size: 0.8rem;
      line-height: 1.1rem;
    }
  }
`;

export const Socials = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  p {
    text-decoration: underline;
    font-size: 0.9rem;
    margin: 0;
  }
`;

export const SocialIconWrapper = styled.a`
  width: 1.4rem;
  height: 1.4rem;
  display: inline-block;
  position: relative;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease-in-out;
  }
`;

export const ImgContainer = styled.div`
  width: 38%;
  margin-left: auto;
  position: absolute;
  right: 0;
  bottom: 10%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 15%;
    top: 30%;
  }
`;
