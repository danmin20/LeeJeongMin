import styled from "styled-components";
import dynamic from "next/dynamic";
import { media } from "styles/theme";

const TextAnimation = dynamic(() => import("./TextAnimation"));

const Page1 = () => {
  return (
    <Container className="flex fixed">
      <TextAnimation />
    </Container>
  );
};

const Container = styled.div`
  z-index: -1;
  background-color: ${({ theme }) => theme.color.black};

  .text {
    color: ${({ theme }) => theme.color.white};
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
      color: ${({ theme }) => theme.color.blue};
      ${media.mobile} {
        font-size: 2rem;
      }
    }
  }
`;

export default Page1;
