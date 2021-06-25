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
  width: 100%;
  .text {
    color: ${({ theme }) => theme.color.white};
    position: relative;
    font-weight: 600;
    &__name {
      font-size: 5rem;
    }
    &__fe {
      font-weight: 100;
      margin-top: 5rem;
      font-size: 3rem;
      color: ${({ theme }) => theme.color.blue};
    }
  }
`;

export default Page1;
