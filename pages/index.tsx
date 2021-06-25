import Page1 from "components/Page1";
import Page2 from "components/Page2";
import Page3 from "components/Page3";
import Background from "components/Background";
import { useEffect, useState } from "react";
import Page4 from "components/Page4";
import Page5 from "components/Page5";
import Lottie from "react-lottie";
import Scroll from "public/scroll.json";
import styled from "styled-components";
import Up from "public/up.svg";

const Index = () => {
  const [isScrollable, setIsScrollable] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
      if (innerHeight + scrollY >= document.body.offsetHeight) {
        setIsScrollable(false);
      } else setIsScrollable(true);
    });
  }, []);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: Scroll,
  };

  return (
    <>
      <Background />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <ScrollBtn className="flex">
        {isScrollable ? (
          <Lottie
            options={lottieOptions}
            ariaRole="img"
            isClickToPauseDisabled
          />
        ) : (
          <Up
            style={{ cursor: "pointer" }}
            onClick={() => window.scrollTo(0, 0)}
          />
        )}
      </ScrollBtn>
    </>
  );
};

const Container = styled.div`
  /* width: 100%; */
  /* display: flex; */
  flex-direction: column;
`;

const ScrollBtn = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 50%;
  position: fixed;
  bottom: 4rem;
  right: 3rem;
  z-index: 10;
  opacity: 0.5;
`;

export default Index;
