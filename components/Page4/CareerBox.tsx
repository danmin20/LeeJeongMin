import styled from "styled-components";
import { media } from "../../styles/theme";

const CareerBox = ({ career, isEnd }: any) => (
  <Container data-aos="flip-down" data-aos-delay={500} {...{ isEnd }}>
    <div className="title">
      {career.title}
      <span className="date">{career.date}</span>
    </div>
    <div className="about">{career.about}</div>
  </Container>
);

const Container = styled.div<{ isEnd: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isEnd }) => (isEnd ? "flex-start" : "flex-end")};
  .title {
    margin-top: 1rem;
    font-size: 1.8rem;
    font-weight: 800;
    color: ${({ theme }) => theme.color.green};
    ${media.mobile} {
      font-size: 1rem;
    }
  }
  .about {
    padding: 1rem 0;
    ${media.mobile} {
      font-size: 0.1rem;
    }
  }
  .date {
    color: ${({ theme }) => theme.color.gray};
    font-size: 1rem;
    margin-left: 1rem;
    ${media.mobile} {
      font-size: 0.3rem;
      margin-left: 0.3rem;
    }
  }
  /* .__work {
    width: 100%;
    height: auto;
    border-bottom: 1px solid gray;
    margin: 2rem 0;
    &__title {
      font-weight: 600;
      margin-bottom: 1rem;
      ${media.mobile} {
        font-size: 0.7rem;
      }
    }
    &__person {
      font-weight: 300;
      font-size: 0.8rem;
      margin-left: 0.5rem;
      ${media.mobile} {
        font-size: 0.5rem;
        margin-left: 0.2rem;
      }
    }
    &__stack {
      border-radius: 0.2rem;
      background-color: white;
      color: black;
      margin-right: 0.5rem;
      padding: 0.1rem 0.5rem;
      font-size: 0.8rem;
      white-space: nowrap;
      ${media.mobile} {
        font-size: 0.3rem;
      }
    }
    &__thing {
      font-weight: 300;
      line-height: 150%;
      margin: 1rem 0;
      ${media.mobile} {
        font-size: 0.3rem;
      }
    }
  } */
`;

export default CareerBox;
