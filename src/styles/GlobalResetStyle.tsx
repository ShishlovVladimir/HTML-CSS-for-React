import { createGlobalStyle } from "styled-components";

export const GlobalResetStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    li {
        list-style: none;
    }

    a,
    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: inherit;
        font-size: inherit;
    }

    img {
        vertical-align: top;
    }

    body {
        font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
        background-color: #f5f5f5;

    }
`;
