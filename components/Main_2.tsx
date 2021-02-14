import { useRouter } from "next/router";
import styled from "styled-components";
import { media } from "../styles/theme";

const Main_2 = () => {
  const router = useRouter();

  return (
    <Container>
      <TextSlider />
      <div className="__progress">
        <ProgressBar />
      </div>
      <TextBox>
        <div>
          <Bold>Frontend</Bold>를 깊이 있게 다져나가고자 하는{" "}
          <Bold>주니어 개발자</Bold>입니다.
        </div>
        <div>
          Backend에도 관심을 가지는 등, 분야를 가리지 않고 적극적으로 개발에
          대한 관심사를 넓혀나가고 있습니다.
        </div>
        <Bold>우물 안 개구리가 되지 말자, 내가 아는 것이 전부가 아니다.</Bold>
        <div>항상 되새기고 또 되새기는 문장입니다.</div>
        <div>
          그렇게 다양한 대외활동과 협업경험을 쌓았으며, 매번{" "}
          <Bold>새로운 계획과 도전</Bold>은 큰 자극제가 되어 주었습니다.
        </div>
        <div>
          스스로에게 새로운 과제를 내어주며 계속해서
          <Bold>발전해 나갈 기회</Bold>를 만들어주고자 합니다.
        </div>
      </TextBox>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          display: "flex",
        }}
      >
        <Route onClick={() => router.push("/about")}>ABOUT</Route>
        <Route onClick={() => window.open("https://velog.io/@danmin20")}>
          BLOG
        </Route>
        <Route onClick={() => window.open("https://github.com/danmin20")}>
          GITHUB
        </Route>
      </div>
    </Container>
  );
};

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
          <span className="__text">Frontend.</span>
        </Slide>
        <Slide>
          <span className="__text">React.</span>
        </Slide>
        <Slide>
          <span className="__text">Vue.</span>
        </Slide>
        <Slide>
          <span className="__text">Javascript.</span>
        </Slide>
        <Slide>
          <span className="__text">Typescript.</span>
        </Slide>
      </div>
    </div>
  </SlideContainer>
);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .__progress {
    position: relative;
    background-color: white;
    height: 0.3rem;
    width: 60%;
    ${media.tablet} {
      width: 80%;
    }
    ${media.mobile} {
      width: 90%;
    }
  }
`;

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
    background: ${({ theme }) => theme.color.gradient};
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

const ProgressBar = styled.div`
  height: 0.3rem;
  background: ${({ theme }) => theme.color.gradient};
  position: absolute;
  animation: progress 4s infinite;
`;

const TextBox = styled.div`
  line-height: 230%;
  margin-top: 3rem;
  text-align: end;
  width: 60%;
  ${media.tablet} {
    width: 80%;
    font-size: 0.9rem;
  }
  ${media.mobile} {
    width: 90%;
    font-size: 0.1rem;
  }
`;

const Bold = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  margin-left: 0.3rem;
  ${media.tablet} {
    font-size: 1.2rem;
  }
  ${media.mobile} {
    margin-left: 0.1rem;
    font-size: 0.7rem;
  }
`;

const Route = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 2rem;
  margin: 3rem;
  &:hover {
    background: ${({ theme }) => theme.color.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ${media.mobile} {
    font-size: 1rem;
    margin: 1rem;
    margin-bottom: 3rem;
  }
`;

export default Main_2;
