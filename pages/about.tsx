import styled from 'styled-components';
import Image from 'next/image';
import ActivityBox from '../components/ActivityBox';
import Background from '../components/Background';
import CareerBox from '../components/CareerBox';
import SkillBox from '../components/SkillBox';
import Up from '../public/up.svg';
import { activities, careers, skills } from '../public/data';
import { media } from '../styles/theme';
import TextAnimation from '../components/TextAnimation';

const About = () => (
  <>
    <Background />
    <Info />
    <List />
    <Up />
  </>
);

const Info = () => (
  <InfoContainer>
    <TextAnimation />
    <div className="myInfo">
      <div className="myInfo__box">
        <div className="myInfo__img">
          <Image src="/profile.jpeg" width={300} height={400} />
        </div>
        <div className="myInfo__content">
          <div className="myInfo__content__title">학력</div>
          {`경희대학교 재학 ( 2018.03 ~ )
            경일여자고등학교 졸업 ( 2015.03 ~ 2018.02 )`}
          <div className="myInfo__content__title">대외활동</div>
          {`멋쟁이사자처럼 경희대 8기 운영진
            SOPT 26기 파트원
            디프만 8기 FE 개발자
            디프만 9기 운영진
            AUSG 4기 멤버
            SOPT 27기 비활OB`}
          <div className="myInfo__content__title">실무경험</div>
          {`NAVER ( 2021.03 ~ 2021.04 )
            MEGAZONE CLOUD ( 2020.11 ~ 2018.02 )
            TwentyOZ ( 2020.06 ~ 2020.10 )`}
        </div>
      </div>
      <div className="myInfo__content__title">Contact</div>
      <div
        role="button"
        onClick={() => window.open('mailto:ljm991108@gmail.com')}
        onKeyPress={() => window.open('mailto:ljm991108@gmail.com')}
        tabIndex={0}
      />ljm991108@gmail.com
    </div>
  </InfoContainer>
);

const List = () => (
  <ListContainer>
    {/* careers */}
    <div className="box">
      <div>
        <span className="box__title">Careers.</span>
      </div>
      {careers.map((career, idx) => (
        <CareerBox key={idx.toString()} career={career} />
      ))}
    </div>

    {/* skills */}
    <div className="box">
      <div>
        <span className="box__title">Skills.</span>
      </div>
      {skills.map((skill, idx) => (
        <SkillBox key={idx.toString()} skill={skill} />
      ))}
    </div>

    {/* activities */}
    <div className="box">
      <div>
        <span className="box__title">Activities.</span>
      </div>
      {activities.map((activity, idx) => (
        <ActivityBox key={idx.toString()} activity={activity} />
      ))}
    </div>
  </ListContainer>
);

const InfoContainer = styled.div`
  width: 100%;
  color: white;
  .myInfo {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__content {
      margin-left: 3rem;
      white-space: pre-line;
      ${media.mobile} {
        margin-left: 0;
        margin-top: 3rem;
        font-size: 0.8rem;
      }
      &__title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid white;
        &:not(:first-child) {
          margin-top: 2rem;
        }
        ${media.mobile} {
          font-size: 1.2rem;
        }
      }
    }
    &__box {
      display: flex;
      ${media.mobile} {
        align-items: center;
        flex-direction: column;
      }
    }
    &__img {
      width: 300px;
      ${media.mobile} {
        width: 200px;
      }
    }
  }
`;

const ListContainer = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  .box {
    padding: 3rem;
    color: white;
    display: flex;
    flex-direction: column;
    ${media.mobile} {
      padding: 3rem 1.5rem;
    }
    &__title {
      font-size: 3rem;
      font-weight: 600;
      background: ${({ theme }) => theme.color.gradientPurple};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      ${media.mobile} {
        font-size: 2rem;
      }
    }
  }
`;

export default About;
