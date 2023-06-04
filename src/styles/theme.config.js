import { createGlobalStyle } from "styled-components";

export const ligthTheme = {
    body: "#0E2A47",
    text: "#fff",
};

export const GlobalStyles = createGlobalStyle `
// Font Kanit
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text}
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