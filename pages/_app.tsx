import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/globalstyles'
import { DefaultLayout } from '../layout/DefaultLayout'
const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <DefaultLayout>
        <GlobalStyle />
        <Component {...pageProps} />
      </DefaultLayout>
      </ThemeProvider>
    </>
  )
}
