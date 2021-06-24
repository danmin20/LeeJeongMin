import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      black: "#222831";
      gray: "#393E46";
      blue: "#00ADB5";
      white: "#EEEEEE";
      gradient: "linear-gradient(128.93deg, #00ADB5 22.41%, #393E46 93.45%)";
      gradientPurple: "linear-gradient(128.93deg, white 1%, #958fa9 50%)";
      purple: "#958fa9";
    };
  }
}
