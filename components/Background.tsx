import styled from 'styled-components';

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
  background: radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default Background;
