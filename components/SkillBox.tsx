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
  margin: 3rem;
  color: white;
  display: flex;
  flex-direction: column;

  .__title {
    font-size: 3rem;
    font-weight: 600;
    background: linear-gradient(128.93deg, #00ff94 22.41%, #0038ff 93.45%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default SkillBox;
