import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    div[role="button"] {
        cursor: pointer;
    }
    html{
        font-family: "Montserrat", sans-serif;
    }
`;
