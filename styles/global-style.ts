import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

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
        scroll-behavior: smooth;
        ${media.mobile}{
            font-size: 8px;
        }
    }
    .flex{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .fixed{
        width: 100%;
        top: 0;
        left: 0;
        height: 100vh;
        position: fixed;
    }

    .pc-only{
        ${media.mobile}{
            display: none;
        }
    }
    .mobile-only{
        display: none;
        ${media.mobile}{
            display: block;
        }
    }
`;
