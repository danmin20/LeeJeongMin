import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    ::-webkit-scrollbar { 
        display: none !important;
    }
    :focus {
        outline: none;
        border: none;
    }
    div[role="button"] {
        cursor: pointer;
    }
    html{
        font-family: "Montserrat", sans-serif;
        color: ${({ theme }) => theme.color.gray};
    }
    .flex{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
