import { projects } from "public/data";
import styled from "styled-components";
import ProjectBox from "./ProjectBox";

const Page5 = () => {
  return (
    <Container>
      <Title text="Projects.">Projects.</Title>
      <div className="contents">
        {projects.map((project, idx) => (
          <div className="contents__content">
            <ProjectBox {...{ project, idx }} key={idx.toString()} />
          </div>
        ))}
      </div>
      <div className="text">{`Designed & Developed By `}</div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
  margin-top: 10rem;
  box-sizing: border-box;
  .contents {
    margin-top: 5rem;
    background-color: #000;
    padding: 8rem;
    padding-bottom: 20rem;
    display: flex;
    flex-direction: column;
    &__content {
      padding-top: 5rem;
      width: 100%;
      color: white;
    }
  }
  .text {
    font-size: 1.2rem;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    color: ${({ theme }) => theme.color.gray};
    font-weight: 800;
    ::after {
      color: #fff;
      content: "LeeJeongMin";
    }
  }
`;

const Title = styled.div<{ text: string }>`
  color: ${({ theme }) => theme.color.neonGreen};
  position: absolute;
  box-sizing: border-box;
  font-size: 8rem;
  font-weight: 800;
  left: 10rem;
  width: 100%;

  ::after {
    content: "${({ text }) => `${text}`}";
    position: absolute;
    color: transparent;
    -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.neonBlue};
    top: -0.4rem;
    left: -0.4rem;
  }
`;

export default Page5;
