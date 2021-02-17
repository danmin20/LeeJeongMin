import Image from "next/image";
import styled from "styled-components";
import { media } from "../styles/theme";

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

const ImgSlide = styled.div`
  position: absolute;
  margin-right: 10rem;
  right: 10rem;
  bottom: 10rem;
  ${media.laptop} {
    right: -5rem;
    bottom: 10rem;
  }
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

export default ImgSlider;
