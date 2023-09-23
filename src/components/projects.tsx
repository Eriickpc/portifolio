import styled from "styled-components";
import { ProjectCard } from "./container-project";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  background-color: #fff;
  margin: 15px;
  border-radius: 8px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }

  > div {
    display: flex;
    width: 100%;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
export function Projects() {
  return (
    <>
      <Container>
        <h3>Projetos em destaque</h3>
        <div>
          <ProjectCard />
        </div>
      </Container>
    </>
  );
}
