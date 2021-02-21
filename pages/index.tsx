import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ImgSlider from '../components/ImgSlider';
import { media } from '../styles/theme';
import TextSlider from '../components/TextSlider';
import ProgressBar from '../components/ProgressBar';

const Index = () => (
  <ReactFullpage
    licenseKey="YOUR_KEY_HERE"
    scrollingSpeed={1000}
    render={() => (
      <ReactFullpage.Wrapper>
        <div className="section">
          <Main1 />
        </div>
        <div className="section">
          <Main2 />
        </div>
      </ReactFullpage.Wrapper>
    )}
  />
);

const Main1 = () => (
  <Main1Container>
    <ImgSlider />
    <div className="text">
      <div className="text__name">LEE</div>
      <div className="text__name">JEONG</div>
      <div className="text__name">MIN</div>
      <div className="text__fe">FE Developer</div>
    </div>
  </Main1Container>
);

const Main2 = () => {
  const router = useRouter();

  return (
    <Main2Container>
      <TextSlider />
      <ProgressBar />
      <TextBox>
        <div>
          <Bold>Frontend</Bold>를 깊이 있게 다져나가고자 하는{' '}
          <Bold>주니어 개발자</Bold>입니다.
        </div>
        <div>
          Backend에도 관심을 가지는 등, 분야를 가리지 않고 적극적으로 개발에
          대한 관심사를 넓혀나가고 있습니다.
        </div>
        <Bold>우물 안 개구리가 되지 말자, 내가 아는 것이 전부가 아니다.</Bold>
        <div>항상 되새기고 또 되새기는 문장입니다.</div>
        <div>
          그렇게 다양한 대외활동과 협업경험을 쌓았으며, 매번{' '}
          <Bold>새로운 계획과 도전</Bold>은 큰 자극제가 되어 주었습니다.
        </div>
        <div>
          스스로에게 새로운 과제를 내어주며 계속해서
          <Bold>발전해 나갈 기회</Bold>를 만들어주고자 합니다.
        </div>
      </TextBox>
      <div className="routes">
        <div
          className="routes__route"
          role="button"
          onClick={() => router.push('/about')}
          onKeyPress={() => router.push('/about')}
          tabIndex={0}
        >ABOUT
        </div>
        <div
          className="routes__route"
          role="button"
          onClick={() => window.open('https://velog.io/@danmin20')}
          onKeyPress={() => window.open('https://velog.io/@danmin20')}
          tabIndex={0}
        >
          BLOG
        </div>
        <div
          className="routes__route"
          role="button"
          onClick={() => window.open('https://github.com/danmin20')}
          onKeyPress={() => window.open('https://github.com/danmin20')}
          tabIndex={0}
        >
          GITHUB
        </div>
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

  .text {
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
  .routes {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 60%;
    margin-bottom: 3rem;
    justify-content: space-between;
    font-weight: 700;
    font-size: 2rem;
    ${media.tablet} {
      width: 80%;
      font-size: 1.5rem;
    }
    ${media.mobile} {
      width: 90%;
      font-size: 1rem;
    }

    &__route {
      &:hover {
        background: ${({ theme }) => theme.color.gradient};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
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

export default Index;
