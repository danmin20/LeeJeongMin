import styled from "styled-components";
import { media } from "../../styles/theme";

const SkillBox = ({ skill }: any) => (
  <Container data-aos="flip-left">
    <div className="name">{skill.title}</div>
    <div className="contents">
      {skill.contents.map((content: string, idx: number) => (
        <div key={idx.toString()} className="contents__content">
          {content}
        </div>
      ))}
    </div>
  </Container>
);

const Container = styled.div`
  border: 0.2rem solid ${({ theme }) => theme.color.blue};
  border-radius: 2rem;
  margin: 2rem;
  padding: 2rem;
  position: relative;
  .name {
    transform: rotate(-10deg);
    position: absolute;
    left: -1.5rem;
    top: -1.5rem;
    border: 0.2rem solid ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.blue};
    background-color: ${({ theme }) => theme.color.black};
    padding: 0.5rem 1rem;
    font-size: 2rem;
    font-weight: 800;
    ${media.mobile} {
      font-size: 1rem;
      margin-top: 2rem;
    }
  }
  .contents {
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.color.white};
    line-height: 150%;
    ${media.mobile} {
      font-size: 0.3rem;
      margin: 1rem 0;
    }
    &__content {
      line-height: 2rem;
      position: relative;
      z-index: 3;
    }
  }
`;

export default SkillBox;
