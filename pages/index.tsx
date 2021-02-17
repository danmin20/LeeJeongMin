import ReactFullpage from "@fullpage/react-fullpage";
import ImgSlider from "../components/ImgSlider";
import styled from "styled-components";
import { media } from "../styles/theme";
import TextSlider from "../components/TextSlider";
import { useRouter } from "next/router";
import ProgressBar from "../components/ProgressBar";

const Index = () => (
  <ReactFullpage
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000}
    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Main_1 />
          </div>
          <div className="section">
            <Main_2 />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

const Main_1 = () => {
  return (
    <Main1Container>
      <ImgSlider />
      <div className="__text">
        <div className="__text__name">LEE</div>
        <div className="__text__name">JEONG</div>
        <div className="__text__name">MIN</div>
        <div className="__text__fe">FE Developer</div>
      </div>
    </Main1Container>
  );
};

const Main_2 = () => {
  const router = useRouter();

  return (
    <Main2Container>
      <TextSlider />
      <ProgressBar />
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
    </Main2Container>
  );
};

const Main1Container = styled.div`
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

const Main2Container = styled.div`
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

export default Index;
