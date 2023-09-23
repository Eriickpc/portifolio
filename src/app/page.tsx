"use client";
import { Introduction } from "@/components/apresentation";
import { Projects } from "@/components/projects";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  background-color: var(--background);
  padding: 10px 160px;
`;

export default function Home() {
  return (
    <>
      <Main>
        <Introduction />
        <Projects />
      </Main>
    </>
  );
}
