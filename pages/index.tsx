import Head from 'next/head'
import { Main } from '../styles/sharedstyles'
import { Feed } from '../styles/home'
import Buttons_ from '../components/Home/Buttons'
import { useState } from 'react'
import { useMugsPages, 
         useProductsPages, 
         useTshirtsPages 
      } from '../hooks/usePages'

export default function Home() {
  const [menuSelect, setMenuSelect] = useState(1);
  const [initial, setInicial] = useState(0);

  return (
    <Main>
        <Head>
          <title>Capputeeno</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Buttons_ 
          menuSelect={menuSelect} 
          setMenuSelect={setMenuSelect}
          setInicial={setInicial}
          initial={initial}
          />

        <Feed>
          {
            menuSelect === 1 ? 
              useProductsPages(initial, 9)
             : menuSelect === 2 ? 
             useTshirtsPages(initial, 9) :
             useMugsPages(initial, 9)
          }
        </Feed>
      </Main>
  )
}
