import { useRouter } from "next/router";
import styled from "styled-components";

const Main_2 = () => {
  const router = useRouter();

  return (
    <Container>
      <TextSlider />
      <div
        style={{
          position: "relative",
          background: "white",
          height: "0.3rem",
          width: "44rem",
        }}
      >
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
        <Route>BLOG</Route>
        <Route onClick={() => window.open("https://github.com/danmin20")}>
          GITHUB
        </Route>
      </div>
    </Container>
  );
};

const TextSlider = () => (
  <div style={{ width: "78rem" }}>
    <div
      style={{
        width: "70rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "350rem",
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
  </div>
);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
`;

const Slide = styled.div`
  width: 70rem;
  font-size: 4.5rem;
  font-weight: 700;
  padding-left: 17rem;
  .__text {
    background: linear-gradient(128.93deg, #00ff94 22.41%, #0038ff 93.45%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ProgressBar = styled.div`
  height: 0.3rem;
  background: linear-gradient(128.93deg, #00ff94 22.41%, #0038ff 93.45%);
  position: absolute;
  animation: progress 4s infinite;
`;

const TextBox = styled.div`
  line-height: 230%;
  margin-top: 3rem;
  text-align: end;
`;

const Bold = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  margin-left: 0.3rem;
`;

const Route = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 2rem;
  margin: 3rem;
  &:hover {
    background: linear-gradient(128.93deg, #00ff94 22.41%, #0038ff 93.45%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default Main_2;
