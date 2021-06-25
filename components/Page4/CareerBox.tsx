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
  }
  .about {
    padding: 1rem 0;
  }
  .date {
    color: ${({ theme }) => theme.color.gray};
    font-size: 1rem;
    margin-left: 1rem;
  }
`;

export default CareerBox;
