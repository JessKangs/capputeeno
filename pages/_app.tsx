import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globalstyles'
import { DefaultLayout } from '../layout/DefaultLayout'
import Header_ from '../components/Header'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>      
        <GlobalStyle />
        <Header_ />
        <Component {...pageProps} />
    </>
  )
}
