import styled from "styled-components";
import ActivityBox from "../components/ActivityBox";
import Background from "../components/Background";
import CareerBox from "../components/CareerBox";
import SkillBox from "../components/SkillBox";

const About = () => {
  return (
    <>
      <Background />
      <Container>
        <CareerBox />
        <SkillBox />
        <ActivityBox />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  height: auto;
`;

export default About;
