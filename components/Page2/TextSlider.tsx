import styled from "styled-components";
import { media } from "../../styles/theme";

const TextSlider = () => (
  <SlideContainer>
    <div
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "500%",
          overflow: "hidden",
          display: "flex",
          animation: "slide 20s infinite",
        }}
      >
        <Slide>
          <span className="__text">Frontend</span>
        </Slide>
        <Slide>
          <span className="__text">React</span>
        </Slide>
        <Slide>
          <span className="__text">HTML / CSS</span>
        </Slide>
        <Slide>
          <span className="__text">Javascript</span>
        </Slide>
        <Slide>
          <span className="__text">Typescript</span>
        </Slide>
      </div>
    </div>
  </SlideContainer>
);

const SlideContainer = styled.div`
  width: 100%;
  margin-top: -5rem;
`;

const Slide = styled.div`
  font-size: 4.5rem;
  font-weight: 700;
  padding-left: 4%;
  width: 100%;
  .__text {
    background: ${({ theme }) => theme.color.blue};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ${media.tablet} {
    font-size: 3rem;
    padding-left: 2%;
  }
  ${media.mobile} {
    font-size: 2rem;
    padding-left: 1%;
  }
`;

export default TextSlider;
