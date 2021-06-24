import Page1 from "components/Page1";
import Page2 from "components/Page2";
import Page3 from "components/Page3";
import Background from "components/Background";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Background />
      <Page1 />
      <Page2 />
      <Page3 />
    </>
  );
};

export default Index;
