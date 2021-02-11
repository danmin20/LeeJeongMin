import ReactFullpage from "@fullpage/react-fullpage";
import Main_1 from "../components/Main_1";
import Main_2 from "../components/Main_2";

const Index = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Main_1 />
          </div>
          <div className="section">
            <Main_2 />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Index;
