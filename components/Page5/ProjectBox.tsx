import styled from "styled-components";
import Github from "public/github.svg";
import Website from "public/website.svg";
import Download from "public/download.svg";

const ProjectBox = ({ project, idx }: any) => {
  const isEven = (idx + 1) % 2 === 0;
  return (
    <Container data-aos={isEven ? "flip-right" : "flip-left"}>
      <div
        className={
          isEven ? "container blue-container" : "container green-container"
        }
      >
        <div className="title">{project.title}</div>
        <div className="date">{project.date}</div>
        <div className="skills">
          {project.skills.map((skill: string) => (
            <div className="skills__skill">{skill}</div>
          ))}
        </div>
        <div className="about">{project.about}</div>

        {/* <div>{project?.website}</div>
        <div>{project?.github}</div> */}
        <div style={{ marginTop: "0.5rem" }}>
          {project.contents.map((content: string) => (
            <div className="content">{content}</div>
          ))}
        </div>
        <div className="icons">
          {project?.github && <Github className="svg" />}
          {project?.website && <Website className="svg" />}
          {project?.download && <Download className="svg" />}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .container {
    padding: 2rem;
    position: relative;
    border-radius: 2rem;
    background-color: #101010;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .title {
      font-weight: 800;
      position: absolute;
      padding: 1rem;
      border-radius: 2rem;
      top: -2rem;
      padding: 1rem;
    }
    .date {
      padding: 0 1rem;
      position: absolute;
      background-color: #101010;
      top: -0.1rem;
    }
    .skills {
      display: flex;
      margin: 0.5rem 0;
      &__skill {
        background-color: #fff;
        color: #000;
        padding: 0.2rem;
        border-radius: 0.5rem;
        :not(:first-child) {
          margin-left: 0.5rem;
        }
      }
    }
    .about {
      margin: 0.5rem 0;
      font-weight: 800;
      font-size: 1.2rem;
    }
    .content {
      line-height: 1.5rem;
    }
    .icons {
      display: flex;
      position: absolute;
      bottom: -1rem;
      right: 2rem;
    }
    .svg {
      cursor: pointer;
      width: 30;
      :hover {
        fill: white;
      }
      :not(:last-child) {
        margin-right: 0.5rem;
      }
    }
  }

  .green-container {
    margin-right: 10rem;
    border: 0.1rem solid ${({ theme }) => theme.color.neonGreen};
    .title {
      color: #000;
      background-color: ${({ theme }) => theme.color.neonGreen};
      border: 0.1rem solid ${({ theme }) => theme.color.neonGreen};
      left: -3rem;
      transform: rotate(-10deg);
    }
    .date {
      right: 2rem;
    }
    .about {
      color: ${({ theme }) => theme.color.neonGreen};
    }
    .svg {
      fill: ${({ theme }) => theme.color.neonGreen};
    }
  }

  .blue-container {
    margin-left: 10rem;
    border: 0.1rem solid ${({ theme }) => theme.color.neonBlue};
    .title {
      color: #fff;
      background-color: ${({ theme }) => theme.color.neonBlue};
      border: 0.1rem solid ${({ theme }) => theme.color.neonBlue};
      right: -3rem;
      transform: rotate(10deg);
    }
    .date {
      left: 2rem;
    }
    .about {
      color: ${({ theme }) => theme.color.neonBlue};
    }
    .svg {
      fill: ${({ theme }) => theme.color.neonBlue};
    }
  }
`;

export default ProjectBox;
