import styled from "styled-components";
import { media } from "../styles/theme";

const CareerBox = ({ career }) => {
  return (
    <Container>
      <div className="__place">
        {career.name}
        <span className="__date">{career.date}</span>
      </div>
      <div className="__part">{career.part}</div>
      {career.works &&
        career.works.map((work, idx) => (
          <div key={idx} className="__work">
            <div className="__work__title">
              {work.title}
              <span className="__work__person">{work.person}</span>
            </div>
            <div style={{ display: "flex", overflowX: "scroll" }}>
              {work.stacks.map((stack: String, idx) => (
                <div key={idx} className="__work__stack">
                  {stack}
                </div>
              ))}
            </div>
            <div className="__work__thing">
              {work.things.map((thing: String, idx) => (
                <div key={idx}>- {thing}</div>
              ))}
            </div>
          </div>
        ))}
    </Container>
  );
};

const Container = styled.div`
  .__title {
    font-size: 3rem;
    font-weight: 600;
    background: ${({ theme }) => theme.color.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${media.mobile} {
      font-size: 2rem;
    }
  }
  .__place {
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: 600;
    ${media.mobile} {
      font-size: 1rem;
    }
  }
  .__part {
    padding: 1rem 0;
    border-bottom: 1px solid white;
    margin-bottom: 1rem;
    font-weight: 300;
    ${media.mobile} {
      font-size: 0.1rem;
    }
  }
  .__date {
    font-size: 1rem;
    margin-left: 1rem;
    ${media.mobile} {
      font-size: 0.3rem;
      margin-left: 0.3rem;
    }
  }
  .__work {
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
  }
`;

export default CareerBox;
