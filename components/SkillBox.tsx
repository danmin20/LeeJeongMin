import styled from "styled-components";

const SkillBox = () => {
  return (
    <Box>
      <div>
        <span className="__title">Skills.</span>
      </div>
    </Box>
  );
};

const Box = styled.div`
  padding: 3rem;
  color: white;
  display: flex;
  flex-direction: column;

  .__title {
    font-size: 3rem;
    font-weight: 600;
    background: ${({ theme }) => theme.color.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default SkillBox;
