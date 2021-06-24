import styled from "styled-components";
import Memoji from "public/memoji.svg";

const Information = () => {
  return (
    <Conatiner className="flex">
      <div className="memoji">
        <div className="memoji__box">Developer</div>
        <Memoji className="memoji__svg" />
        <div className="memoji__circle" />
      </div>
      <div className="info">
        <div
          className="info__button"
          onClick={() => window.open("mailto:ljm991108@gmail.com")}
        >
          ljm991108@gmail.com
        </div>
        <div
          className="info__button"
          onClick={() => window.open("https://github.com/danmin20")}
        >
          GITHUB
        </div>
        <div
          className="info__button"
          onClick={() => window.open("https://velog.io/@danmin20")}
        >
          BLOG
        </div>
        <div
          className="info__button"
          onClick={() =>
            window.open(
              "https://www.notion.so/danmin20/Resume-7c32047349064df5b0de46f325550e22"
            )
          }
        >
          RESUME
        </div>
      </div>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  padding: 5rem;
  position: relative;
  background-color: ${({ theme }) => theme.color.white};
  .memoji {
    position: relative;
    &__box {
      position: absolute;
      background-color: ${({ theme }) => theme.color.gray};
      padding: 0.5rem 1.5rem;
      font-weight: 800;
      font-size: 1.5rem;
      border-radius: 2rem;
      color: ${({ theme }) => theme.color.white};
      left: -1rem;
      top: 1.8rem;
      transform: rotate(-10deg);
      border: 0.2rem solid white;
    }
    &__svg {
      position: absolute;
      left: 3rem;
      top: 3rem;
    }
    &__circle {
      width: 13rem;
      height: 13rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.blue};
    }
  }
  .info {
    border-radius: 2.5rem;
    padding: 4rem;
    margin-left: 5rem;
    box-sizing: border-box;
    height: 13rem;
    display: flex;
    font-weight: 600;
    letter-spacing: 0.1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid ${({ theme }) => theme.color.blue};

    &__button {
      cursor: pointer;
      width: 100%;
      padding: 0.8rem 2rem;
      border-radius: 2rem;
      border: 0.5rem solid ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.gray};
      color: ${({ theme }) => theme.color.white};
      :not(:first-child) {
        margin-top: 0.6rem;
      }
      :hover {
        background-color: ${({ theme }) => theme.color.blue};
      }
    }
  }
`;

export default Information;
