import styled from "styled-components";
import { media } from "../styles/theme";

const ActivityBox = ({ activity }: any) => (
  <Container>
    <div style={{ position: "relative", marginTop: "1rem" }}>
      <Card>
        <div className="__name">
          {activity.title}
          <span className="__date">{activity.date}</span>
        </div>
        <div className="__about">{activity.about}</div>
      </Card>
      <CardBg />
    </div>
  </Container>
);

const Container = styled.div`
  .__title {
    font-size: 3rem;
    font-weight: 600;
    background: ${({ theme }) => theme.color.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .__name {
    font-size: 2rem;
    font-weight: 600;
  }
  .__date {
    font-size: 1rem;
    margin-left: 1rem;
  }
  .__about {
    font-weight: 300;
    line-height: 150%;
    margin: 1rem 0;
  }
`;

const Card = styled.div`
  position: relative;
  z-index: 1;
  height: 8rem;
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 8rem;
  background: gray;
  opacity: 0.1;
  border-radius: 1rem;
  z-index: 0;
`;

export default ActivityBox;
