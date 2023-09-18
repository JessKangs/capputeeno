import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import GlobalStyle from '../styles/globalstyles'
import Header_ from '../components/Header'


export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://localhost:3333",
    cache: new InMemoryCache()
  });

  return (
    <>      
        <ApolloProvider client={client}>
        <GlobalStyle />
        <Header_ />
        <Component {...pageProps} />
        </ApolloProvider>
    </>
  )
}
