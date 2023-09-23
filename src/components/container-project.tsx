/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import projects from "@/components/list-projects.json";

const ContainerProjectCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 250px;
  height: 260px;

  background-color: var(--background);
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  p {
    padding: 5px;
    font-size: 16px;
    font-weight: 500;
  }
  img {
    width: 100%;
    height: 50%;
    border-radius: 5px 5px 0 0;
  }
`;

const CardDivider = styled.span`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 18px;
  font-weight: 500;

  background-color: rgba(103, 103, 103);
`;
export function ProjectCard() {
  return projects.map((project) => {
    return (
      <>
        <ContainerProjectCard>
          <img src={project.image} alt="Foto do projeto" />
          <CardDivider> {project.tittle} </CardDivider>
          <p>{project.description}</p>
        </ContainerProjectCard>
      </>
    );
  });
}
