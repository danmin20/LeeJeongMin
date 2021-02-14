import Image from "next/image";
import styled from "styled-components";
import { media } from "../styles/theme";

const Main_1 = () => {
  return (
    <Container>
      <ImgSlider />
      <div className="__text">
        <div className="__text__name">LEE</div>
        <div className="__text__name">JEONG</div>
        <div className="__text__name">MIN</div>
        <div className="__text__fe">FE Developer</div>
      </div>
    </Container>
  );
};

const ImgSlider = () => (
  <div>
    <ImgSlide
      style={{
        animationDelay: "0s",
        color: "white",
      }}
    >
      <Image
        src="/1.jpeg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </ImgSlide>
    <ImgSlide
      style={{
        animationDelay: "3s",
        color: "white",
      }}
    >
      <Image
        src="/2.jpeg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </ImgSlide>
    <ImgSlide
      style={{
        animationDelay: "6s",
        color: "white",
      }}
    >
      <Image
        src="/3.jpeg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </ImgSlide>
    <ImgSlide
      style={{
        animationDelay: "9s",
        color: "white",
      }}
    >
      <Image
        src="/4.jpeg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </ImgSlide>
  </div>
);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  .__text {
    color: white;
    position: relative;
    font-weight: 600;
    &__name {
      font-size: 5rem;
      ${media.mobile} {
        font-size: 4rem;
      }
    }
    &__fe {
      font-weight: 100;
      margin-top: 5rem;
      font-size: 3rem;
      ${media.mobile} {
        font-size: 2rem;
      }
    }
  }
`;

const ImgSlide = styled.div`
  position: absolute;
  margin-right: 10rem;
  right: -5rem;
  bottom: 10rem;
  ${media.tablet} {
    right: -10rem;
    bottom: 15rem;
  }
  ${media.mobile} {
    right: -10rem;
    bottom: 15rem;
    width: 15rem;
  }
  opacity: 0;
  animation: fade 12s infinite;
`;

export default Main_1;
