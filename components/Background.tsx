import styled from "styled-components";

const Background = () => (
  <Container>
    <div className="stars" />
    <div className="stars2" />
    <div className="stars3" />
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 110vh;
  overflow: hidden;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
`;

export default Background;
