// import { useRouter } from "next/router";
import styled from "styled-components";
import { media } from "styles/theme";
import TextSlider from "./TextSlider";
import ProgressBar from "./ProgressBar";
import Information from "./Information";

const Page2 = () => (
  <Container className="flex">
    <TextSlider />
    <ProgressBar />
    <Information />
    <TextBox className="flex">
      <div>
        <Bold>Frontend</Bold>를 깊이 있게 다져나가고자 하는
        <Bold>주니어 개발자</Bold>입니다.{"\n"}
        Backend에도 관심을 가지는 등, 분야를 가리지 않고 적극적으로 개발에 대한
        관심사를 넓혀나가고 있습니다.{"\n"}
        <Bold>
          " 우물 안 개구리가 되지 말자, 내가 아는 것이 전부가 아니다. "
        </Bold>
        {"\n"}
        항상 되새기고 또 되새기는 문장입니다.{"\n"}그렇게 다양한 대외활동과
        협업경험을 쌓았으며, 매번
        <Bold>새로운 계획과 도전</Bold>은 큰 자극제가 되어 주었습니다.{"\n"}
        스스로에게 새로운 과제를 내어주며 계속해서
        <Bold>발전해 나갈 기회</Bold>를 만들어주고자 합니다.
      </div>
    </TextBox>
  </Container>
);

const Container = styled.div`
  width: 100%;
  margin-top: 100vh;
  height: 100vh;
  padding-top: 3rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.white};
  overflow: hidden;
  position: relative;
  flex-direction: column;
`;

const TextBox = styled.div`
  white-space: pre-line;
  line-height: 230%;
  margin-top: 3rem;
  font-size: 1.1rem;
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
  font-size: 1.3rem;
  margin-left: 0.3rem;
  background: ${({ theme }) => theme.color.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${media.tablet} {
    font-size: 1.2rem;
  }
  ${media.mobile} {
    margin-left: 0.1rem;
    font-size: 0.7rem;
  }
`;

export default Page2;
