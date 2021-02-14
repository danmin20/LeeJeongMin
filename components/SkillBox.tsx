import styled from "styled-components";
import { skills } from "../public/data";
import { media } from "../styles/theme";

const SkillBox = () => {
  return (
    <Box>
      <div>
        <span className="__title">Skills.</span>
      </div>
      {skills.map((skill, idx) => (
        <div key={idx}>
          <div className="__name">{skill.name}</div>
          <div className="__contents">
            {skill.contents.map((content, idx) => (
              <div key={idx} className="__contents__content">
                - {content}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Box>
  );
};

const Box = styled.div`
  padding: 3rem;
  color: white;
  display: flex;
  flex-direction: column;
  ${media.mobile} {
    padding: 3rem 1.5rem;
  }

  .__title {
    font-size: 3rem;
    font-weight: 600;
    background: ${({ theme }) => theme.color.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${media.mobile} {
      font-size: 2rem;
    }
  }
  .__name {
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: 600;
    ${media.mobile} {
      font-size: 1rem;
      margin-top: 2rem;
    }
  }
  .__contents {
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
