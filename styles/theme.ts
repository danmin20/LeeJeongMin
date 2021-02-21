import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    gradient: 'linear-gradient(128.93deg, #00ff94 22.41%, #0038ff 93.45%)',
  },
};

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  laptop: customMediaQuery(1440),
  tablet: customMediaQuery(800),
  mobile: customMediaQuery(420),
};
