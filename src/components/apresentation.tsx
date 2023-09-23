/* eslint-disable @next/next/no-img-element */

import styled from "styled-components";
import FotoDev from "@/images/erickperfil.jpg";
import Image from "next/image";
import { SocialMedia } from "./social-media";

const SesionIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 350px;
  height: 100vh;
  background: #fff;
  margin: 15px;
  border-radius: 8px;

  h3 {
    display: flex;
    text-align: start;
    padding: 5px;
  }
  img {
    height: 200px;
    width: 250px;
    margin: 20px 50px;
    border-radius: 8px;
  }

  p {
    width: 100%;
    text-align: justify;
    padding: 5px;
  }
`;

export function Introduction() {
  return (
    <>
      <SesionIntroduction>
        <Image src={FotoDev} alt="" />
        <h3>Olá! Bem vindo,</h3>
        <p>
          Me chamo Erick Costa Porcino, tenho 24 anos e sou desenvolvedor
          full-stack. Trabalho com <b>Html</b>, <b>css</b>,<b>JavaScript</b>,
          <b>TypeScript</b> entre outras líguagens.
        </p>
        <SocialMedia />
      </SesionIntroduction>
    </>
  );
}
