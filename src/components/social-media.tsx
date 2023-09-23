import styled from "styled-components";

import { LogoLinkedin } from "./icons/logo-linkedin";
import { LogoFacebook } from "./icons/logo-facebook";
import { LogoInstagram } from "./icons/logo-instagram";
import { GithubIcon } from "./icons/github-icon";

const Social = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
margin-top: 140px;
gap: 5px;
padding: 0;
margin-right: 10px;

p{
    font-size: 10px;
}
  svg {
red;
    &:hover {
      fill: red;
    }
  }
`;

export function SocialMedia() {
  return (
    <>
      <Social>
        <div>
          <a href="https://github.com/eriickpc" target="_blank">
            <GithubIcon />
          </a>
          <a href="https://www.instagram.com/eriickpc/" target="_blank">
            <LogoInstagram />
          </a>
          <a href="https://www.linkedin.com/in/erick-costa-703798277/">
            <LogoLinkedin />
          </a>
          <a href="https://www.facebook.com/ErickCostaP" target="_blank">
            <LogoFacebook />
          </a>
        </div>
        <p>
          Icones por{" "}
          <a href="https://icons8.com/" target="_blank">
            <b>icons8</b>
          </a>
        </p>
      </Social>
    </>
  );
}
