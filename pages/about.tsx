import styled from "styled-components";
import ActivityBox from "../components/ActivityBox";
import Background from "../components/Background";
import CareerBox from "../components/CareerBox";
import SkillBox from "../components/SkillBox";
import { activities, careers, skills } from "../public/data";
import { media } from "../styles/theme";

const About = () => {
  return (
    <>
      <Background />
      <Container>
        {/* careers */}
        <div className="box">
          <div>
            <span className="box__title">Careers.</span>
          </div>
          {careers.map((career, idx) => (
            <CareerBox key={idx} career={career} />
          ))}
        </div>

        {/* skills */}
        <div className="box">
          <div>
            <span className="box__title">Skills.</span>
          </div>
          {skills.map((skill, idx) => (
            <SkillBox key={idx} skill={skill} />
          ))}
        </div>

        {/* activities */}
        <div className="box">
          <div>
            <span className="box__title">Activities.</span>
          </div>
          {activities.map((activity, idx) => (
            <ActivityBox key={idx} activity={activity} />
          ))}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  .box {
    padding: 3rem;
    color: white;
    display: flex;
    flex-direction: column;
    ${media.mobile} {
      padding: 3rem 1.5rem;
    }
    &__title {
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
  }
`;

export default About;
