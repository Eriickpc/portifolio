"use client";

import styled from "styled-components";
import { HomeIcon } from "./icons/home-icon";

const TagHeader = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 150px;

  background-color: #386399;
  color: white;
  font-size: 20px;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default function Header() {
  return (
    <TagHeader>
      <button>
        <HomeIcon />
      </button>
      <p>Logo</p>
      <p>serviços</p>
    </TagHeader>
  );
}
