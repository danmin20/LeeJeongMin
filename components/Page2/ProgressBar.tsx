import styled from "styled-components";
import { media } from "../../styles/theme";

const ProgressBar = () => (
  <Container>
    <Progress />
  </Container>
);

const Container = styled.div`
  position: relative;
  height: 0.3rem;
  width: 60%;
`;

const Progress = styled.div`
  height: 0.3rem;
  background: ${({ theme }) => theme.color.gradient};
  position: absolute;
  animation: progress 4s infinite;
`;

export default ProgressBar;
