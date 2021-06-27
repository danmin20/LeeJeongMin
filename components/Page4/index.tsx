import styled from "styled-components";
import { careers, activities } from "public/data";
import CareerBox from "./CareerBox";
import { media } from "styles/theme";

const Page4 = () => {
  return (
    <Container className="flex">
      <div className="card">
        <Arraw
          style={{
            right: "0.5rem",
            top: "-0.2rem",
            transform: "rotate(40deg)",
          }}
        />
        <Title className="right" text="Career.">
          Career.
        </Title>
        <div className="card__content">
          {careers.map((career, idx) => (
            <CareerBox key={idx.toString()} career={career} />
          ))}
        </div>
      </div>
      <div className="card">
        <Arraw
          style={{
            left: "0.5rem",
            bottom: "-0.2rem",
            transform: "rotate(40deg)",
          }}
        />
        <Title className="left" text="Activity.">
          Activity.
        </Title>
        <div className="card__content">
          {activities.map((activity, idx) => (
            <CareerBox key={idx.toString()} career={activity} isEnd />
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 5rem 10rem;
  flex-direction: column;
  position: relative;
  flex: 1;
  overflow: hidden;
  align-items: flex-start;
  .card {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    &__content {
      flex: 0.8;
      ${media.mobile} {
        flex: 1;
      }
    }
    :first-child {
      padding-bottom: 2rem;
      border: 0px solid ${({ theme }) => theme.color.red};
      border-right-width: 0.5rem;
      top: 2rem;
      right: 5rem;
      ${media.mobile} {
        justify-content: flex-end;
        right: 3rem;
        padding-right: 3rem;
      }
    }
    :last-child {
      padding-top: 2rem;
      border: 0px solid ${({ theme }) => theme.color.red};
      border-left-width: 0.5rem;
      bottom: 2rem;
      left: 5rem;
      ${media.mobile} {
        justify-content: flex-start;
        left: 3rem;
        padding-left: 3rem;
      }
    }
  }
  .left {
    left: -1rem;
    top: -3rem;
  }
  .right {
    right: -1rem;
    bottom: -3rem;
  }
`;

const Title = styled.div<{ text: string }>`
  color: white;
  background-color: ${({ theme }) => theme.color.red};
  position: absolute;
  font-size: 3rem;
  font-weight: 800;
  ::after {
    content: "${({ text }) => `${text}`}";
    position: absolute;
    color: ${({ theme }) => theme.color.black};
    top: -0.3rem;
    left: -0.3rem;
  }
`;

const Arraw = styled.div`
  position: absolute;
  height: 3rem;
  width: 0.5rem;
  background-color: ${({ theme }) => theme.color.red}; ;
`;

export default Page4;
