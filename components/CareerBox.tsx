import styled from "styled-components";
import { careers } from "../public/data";

const CareerBox = () => {
  return (
    <Box>
      <div>
        <span className="__title">Careers.</span>
      </div>
      {careers.map((career) => (
        <div key={career.id}>
          <div className="__place">
            {career.name}
            <span className="__date">{career.date}</span>
          </div>
          <div className="__part">{career.part}</div>
          {career.works.map((work) => (
            <div key={work.id} className="__work">
              <div className="__work__title">
                {work.title}
                <span className="__work__person">{work.person}</span>
              </div>
              <div style={{ display: "flex" }}>
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
        </div>
      ))}
    </Box>
  );
};

const Box = styled.div`
  margin: 3rem;
  color: white;
  display: flex;
  flex-direction: column;

  .__title {
    font-size: 3rem;
    font-weight: 600;
    background: linear-gradient(128.93deg, #00ff94 22.41%, #0038ff 93.45%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .__place {
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: 600;
  }
  .__part {
    padding: 1rem 0;
    border-bottom: 1px solid white;
    margin-bottom: 1rem;
    font-weight: 300;
  }
  .__date {
    font-size: 1rem;
    margin-left: 1rem;
  }
  .__work {
    width: 100%;
    height: auto;
    border-bottom: 1px solid gray;
    margin: 2rem 0;
    &__title {
      font-weight: 600;
      margin-bottom: 1rem;
    }
    &__person {
      font-weight: 300;
      font-size: 0.8rem;
      margin-left: 0.5rem;
    }
    &__stack {
      border-radius: 0.2rem;
      background-color: white;
      color: black;
      margin-right: 0.5rem;
      padding: 0.1rem 0.5rem;
      font-size: 0.8rem;
    }
    &__thing {
      font-weight: 300;
      margin: 1rem 0;
    }
  }
`;

export default CareerBox;
