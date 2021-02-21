import styled from 'styled-components';
import { media } from '../styles/theme';

const ActivityBox = ({ activity }) => (
  <Container>
    <div style={{ position: 'relative', marginTop: '1rem' }}>
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
    ${media.mobile} {
      font-size: 2rem;
    }
  }
  .__name {
    font-size: 2rem;
    font-weight: 600;
    ${media.tablet} {
      font-size: 1.5rem;
    }
    ${media.mobile} {
      font-size: 1rem;
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
  .__about {
    font-weight: 300;
    line-height: 150%;
    margin: 1rem 0;
    ${media.mobile} {
      font-size: 0.3rem;
    }
  }
`;

const Card = styled.div`
  position: relative;
  z-index: 1;
  height: 8rem;
  padding: 0.5rem 2rem;
  ${media.mobile} {
    height: 6.5rem;
    padding: 0.5rem 1rem;
  }
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
  background: black;
  opacity: 0.3;
  border-radius: 1rem;
  z-index: 0;
  ${media.mobile} {
    height: 6.5rem;
  }
`;

export default ActivityBox;
