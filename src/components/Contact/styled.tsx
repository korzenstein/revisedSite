import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const ContactText = styled.div`
  display: flex;

  p {
    font-size: 0.9rem;
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

export const SocialIconWrapper = styled.span`
  width: 1.4rem;
  display: inline-block;
  opacity: 1;
  position: relative;
  transition: all 0.2s ease-in-out;

  img {
    position: absolute;
    top: -1.1rem;
    left: 0;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ImgContainer = styled.div`
  width: 38%;
  margin-left: auto;
  position: absolute;
  right: 0;
  top: -2.7rem;

  img {
    width: 100%;
    height: auto;
  }
`;
