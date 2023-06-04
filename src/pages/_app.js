import { ThemeProvider } from "styled-components"
import { GlobalStyles, lightTheme } from "@/styles/theme.config"

export default function App({ Component, pageProps }) {
  return(
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}
