import styled from "styled-components";
import Image from "next/image";
import ActivityBox from "../components/ActivityBox";
import Background from "../components/Background";
import CareerBox from "../components/CareerBox";
import SkillBox from "../components/SkillBox";
import Up from "../public/up.svg";
import { activities, careers, skills } from "../public/data";
import { media } from "../styles/theme";
import TextAnimation from "../components/TextAnimation";
import Link from "../public/link.svg";

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
          <div className="myInfo__content__title">Info</div>
          <div>이정민</div>
          <div>1999.11.08</div>
          <div>경희대학교 컴퓨터공학과</div>
          <div
            role="button"
            onClick={() =>
              window.open(
                "https://www.notion.so/danmin20/Resume-d7590c400a4242a4800d6f29ea5f35aa"
              )
            }
            onKeyPress={() =>
              window.open(
                "https://www.notion.so/danmin20/Resume-d7590c400a4242a4800d6f29ea5f35aa"
              )
            }
            tabIndex={0}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              Resume
              <div
                style={{
                  fill: "white",
                  width: "12px",
                  height: "12px",
                  marginLeft: "0.3rem",
                }}
              >
                <Link />
              </div>
            </div>
          </div>
          <div className="myInfo__content__title">Contact</div>
          <div>010-4632-6807</div>
          <div
            role="button"
            onClick={() => window.open("mailto:ljm991108@gmail.com")}
            onKeyPress={() => window.open("mailto:ljm991108@gmail.com")}
            tabIndex={0}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              ljm991108@gmail.com
              <div
                style={{
                  fill: "white",
                  width: "12px",
                  height: "12px",
                  marginLeft: "0.3rem",
                }}
              >
                <Link />
              </div>
            </div>
          </div>
        </div>
      </div>
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
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__content {
      margin-left: 3rem;
      white-space: pre-line;
      line-height: 2rem;
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
