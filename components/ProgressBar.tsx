import styled from "styled-components";

const ProgressBar = () => (
  <div className="__progress">
    <Progress />
  </div>
);

const Progress = styled.div`
  height: 0.3rem;
  background: ${({ theme }) => theme.color.gradient};
  position: absolute;
  animation: progress 4s infinite;
`;

export default ProgressBar;
