// import '../styles/globals.css'
import { ThemeProvider, theme,CSSReset } from "@chakra-ui/react"
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
