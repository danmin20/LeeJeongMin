import styled from "styled-components";
import { media } from "../styles/theme";

const SkillBox = ({ skill }) => {
  return (
    <Container>
      <div className="name">{skill.name}</div>
      <div className="contents">
        {skill.contents.map((content: string, idx: number) => (
          <div key={idx} className="contents__content">
            - {content}
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .name {
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: 600;
    ${media.mobile} {
      font-size: 1rem;
      margin-top: 2rem;
    }
  }
  .contents {
    position: relative;
    margin: 2rem 0;
    line-height: 150%;
    font-weight: 300;
    ${media.mobile} {
      font-size: 0.3rem;
      margin: 1rem 0;
    }
    &__content {
      position: relative;
      z-index: 3;
      color: white;
    }
  }
`;

export default SkillBox;
