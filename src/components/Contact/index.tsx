import React from "react";

import {
  ContactSection,
  ContactText,
  SocialIconWrapper,
  Socials,
  ImgContainer,
} from "./styled";
import { GeneralWrapper } from "../LandinPageContainer/styled";

const Contact: React.FC = () => {
  return (
    <GeneralWrapper>
      <ContactSection id="contact">
        <h2>Contact</h2>
        <ContactText>
          <p>
            {` Let's grab a coffee sometime! Feel free to reach out to me directly at
          the email below, or follow me at one of my handles. Hiking trails and
          camping tips are welcome.`}
          </p>
        </ContactText>
        <div>
          <Socials>
            <li>
              <p>skorzenstein@gmail.com</p>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/skorzenstein/">
                <SocialIconWrapper>
                  <img
                    src="./assets/linkedin.png"
                    alt="Linkedin Icon - link to Stephen Korzenstein's LinkedIn Page"
                  />
                </SocialIconWrapper>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/SKorzenstein">
                <SocialIconWrapper>
                  <img
                    src="./assets/twitter.png"
                    alt="Twitter Icon - link to Stephen Korzenstein's Twitter Page"
                  />
                </SocialIconWrapper>
              </a>
            </li>
            <li>
              <a href="https://github.com/korzenstein">
                <SocialIconWrapper>
                  <img
                    src="./assets/github2.png"
                    alt="Github Icon - link to Stephen Korzenstein's Github"
                  />
                </SocialIconWrapper>
              </a>
            </li>
          </Socials>
          <ImgContainer>
            <img src="./assets/coffeeMug.png" alt="Coffee mug with steam" />
          </ImgContainer>
        </div>
      </ContactSection>
    </GeneralWrapper>
  );
};

export default Contact;
