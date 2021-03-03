import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { media } from '../styles/theme';

gsap.registerPlugin(ScrollTrigger);

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  const startTrigger = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const borderText1 = useRef(null);
  const borderText2 = useRef(null);

  useEffect(() => {
    const config = {
      scrollTrigger: {
        trigger: startTrigger.current,
        start: 'top top',
        toggleActions: 'play play play play',
        scrub: 1,
      },
      x: 1000,
      duration: 1,
    };

    gsap.to(text1.current, config);
    gsap.to(borderText1.current, config);
    gsap.to(text2.current, {
      ...config,
      x: -1000,
    });
    gsap.to(borderText2.current, {
      ...config,
      x: -1000,
    });
  }, []);

  return (
    <Container ref={startTrigger}>
      <div className="text">
        <div className="text__content" ref={text1}>
          LEE JEONG MIN DANMIN
        </div>
        <div className="text__content" ref={text2}>
          FRONTEND DEVELOPER
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Circle />
      </div>
      <div className="text">
        <div className="text__content__border" ref={borderText1}>
          LEE JEONG MIN
        </div>
        <div className="text__content__border" ref={borderText2}>
          FRONTEND DEVELOPER
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  .text {
    position: absolute;
    font-family: Montserrat;
    font-weight: 900;
    font-size: 10rem;
    line-height: 14.6rem;
    white-space: nowrap;
    ${media.tablet} {
      line-height: 6rem;
      font-size: 5rem;
    }
    ${media.mobile} {
      line-height: 3rem;
      font-size: 2rem;
    }
    &__content {
      &__border {
        color: transparent;
        -webkit-text-stroke: 0.02em white;
      }
    }
  }
`;

const Circle = styled.div`
  position: relative;
  width: 35rem;
  height: 35rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.purple};
  ${media.tablet} {
    width: 20rem;
    height: 20rem;
  }
  ${media.mobile} {
    width: 10rem;
    height: 10rem;
  }
`;

export default TextAnimation;
