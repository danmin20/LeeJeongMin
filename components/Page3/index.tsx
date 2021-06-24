import { skills } from "public/data";
import styled from "styled-components";
import SkillBox from "./SkillBox";

const strongList = [
  "React",
  "Next.js",
  "Typescript",
  "Javascript",
  "GraphQL",
  "Apollo",
  "Recoil",
  "SCSS",
  "Storybook",
  "Styled-component",
  "Emotion",
];

const Page3 = () => {
  return (
    <div className="flex">
      <Container className="flex">
        <Title text={"Strength."}>Strength.</Title>
        <div className="strong flex">
          {strongList.map((skill, idx) => (
            <div key={idx.toString()} className="strong__skill">
              {skill}
            </div>
          ))}
        </div>
        <div className="skills">
          {skills.map((skill, idx) => (
            <SkillBox key={idx.toString()} skill={skill} />
          ))}
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  max-width: 1373px;
  height: 100vh;
  padding: 0 5rem;
  box-sizing: border-box;
  flex-direction: column;
  .strong {
    width: 100%;
    margin-top: 2rem;
    justify-content: space-between;
    overflow: scroll;
    &__skill {
      border: 0.2rem solid white;
      font-weight: 500;
      padding: 0.2rem 0.5rem;
      border-radius: 1rem;
      color: ${({ theme }) => theme.color.white};
    }
  }
  .skills {
    margin: 0 -2rem;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Title = styled.div<{ text: string }>`
  width: 100%;
  color: ${({ theme }) => theme.color.blue};
  position: relative;
  font-size: 3rem;
  font-weight: 800;
  ::after {
    content: "${({ text }) => `${text}`}";
    position: absolute;
    color: ${({ theme }) => theme.color.white};
    top: -0.3rem;
    left: -0.3rem;
  }
`;

export default Page3;
