import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#0E2A47",
    text: "#fff",
};

export const GlobalStyles = createGlobalStyle `
// Font Kanit
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,500;0,600;0,700;0,800;0,900;1,100;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    font-family: 'Kanit', sans-serif;
    font-weight: 300;
    font-style: normal;
    transition: all 0.50 linear;
}

input, textarea, button {
    font-family: inherit;
    outline: none;
}

a {
    text-decoration: none;
}
`;