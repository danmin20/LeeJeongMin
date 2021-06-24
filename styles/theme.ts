import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    black: "#222831",
    gray: "#393E46",
    blue: "#00ADB5",
    white: "#EEEEEE",
    gradient: "linear-gradient(128.93deg, #00ADB5 22.41%, #393E46 93.45%)",
    gradientPurple: "linear-gradient(128.93deg, white 1%, #958fa9 50%)",
    purple: "#958fa9",

    green: "#346751",
    red: "#C84B31",
    baige: "#ECDBBA",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  laptop: customMediaQuery(1440),
  tablet: customMediaQuery(800),
  mobile: customMediaQuery(420),
};
