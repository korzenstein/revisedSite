import React from "react";
import GithubIcon from "../../assets/github.png";
import LinkedInIcon from "../../assets/linkedin.png";
import CoffeeMugImage from "../../assets/coffeeMug.png";

import {
  ContactSection,
  ContactText,
  SocialIconWrapper,
  Socials,
  ImgContainer,
} from "./styled";
import { GeneralWrapper, StyledH2 } from "../LandingPageContainer/styled";

const email = "skorzenstein@gmail.com";

const copyToClipboard = () => {
  navigator.clipboard.writeText(email).then(
    () => {
      showSnackbar("Email copied to clipboard!");
    },
    (err) => {
      console.error("Failed to copy text: ", err);
    }
  );
};

const showSnackbar = (message: string) => {
  const snackbar = document.createElement("div");
  snackbar.className = "snackbar";
  snackbar.textContent = message;
  document.body.appendChild(snackbar);

  // Add the visible class to trigger CSS animations
  setTimeout(() => {
    snackbar.classList.add("visible");
  }, 100);

  // Remove the snackbar after 3 seconds
  setTimeout(() => {
    snackbar.classList.remove("visible");
    setTimeout(() => {
      document.body.removeChild(snackbar);
    }, 300); // Wait for transition to complete
  }, 3000);
};

const Contact: React.FC = () => {
  return (
    <GeneralWrapper>
      <ContactSection>
        <StyledH2>Contact</StyledH2>
        <ContactText>
          <p>
            {` Let's grab a coffee sometime! Feel free to reach out to me directly at
          the email below, or follow me at one of my handles. Hiking trails and
          camping tips are welcome.`}
          </p>
        </ContactText>
        <div>
          <Socials>
            <li
              onClick={copyToClipboard}
              style={{
                cursor: "pointer",
              }}
            >
              <p>{email}</p>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/skorzenstein/">
                <SocialIconWrapper>
                  <img
                    src={LinkedInIcon}
                    alt="Linkedin Icon - link to Stephen Korzenstein's LinkedIn Page"
                  />
                </SocialIconWrapper>
              </a>
            </li>

            <li>
              <a href="https://github.com/korzenstein">
                <SocialIconWrapper>
                  <img
                    src={GithubIcon}
                    alt="Github Icon - link to Stephen Korzenstein's Github"
                  />
                </SocialIconWrapper>
              </a>
            </li>
          </Socials>
          <ImgContainer>
            <img src={CoffeeMugImage} alt="Coffee mug with steam" />
          </ImgContainer>
        </div>
      </ContactSection>
    </GeneralWrapper>
  );
};

export default Contact;
