import Head from 'next/head'
import { Main } from '../styles/sharedstyles'
import { Feed } from '../styles/home'
import Buttons_ from '../components/Home/Buttons'
import Product from '../components/Home/Product'
import { useState } from 'react'
import { useQuery, gql } from '@apollo/client'

export default function Home() {
  const [menuSelect, setMenuSelect] = useState(1);

  const GET_CATEGORIES = gql`
    query getProductsByCategory {
        allProducts{
            id
            name
            image_url
            description
            category
            price_in_cents
        }
    }  
`;
    let mugsCategory = [];
    let shirtsCategory = [];
    let allProducts = [];
  
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    if ( data !== undefined ) {
      
      allProducts = data.allProducts;

      shirtsCategory = allProducts.filter((value, index) => value.category === 't-shirts')

      mugsCategory = allProducts.filter((value, index) => value.category === 'mugs')
      }
   
  return (
    <Main>
        <Head>
          <title>Capputeeno</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Buttons_ menuSelect={menuSelect} setMenuSelect={setMenuSelect} />

        <Feed>
          {
            menuSelect === 1 ? 
            allProducts.map((value, index) => 
              <Product
                id={value.id} 
                image={value.image_url}
                title={value.name}
                price={value.price_in_cents} 
                key={index}
                />
            ) : 
            menuSelect === 2 ?
            shirtsCategory.map((value, index) => 
              <Product
                id={value.id} 
                image={value.image_url}
                title={value.name}
                price={value.price_in_cents}
                key={index} 
                />
            ) :
            mugsCategory.map((value, index) => 
            <Product
              id={value.id} 
              image={value.image_url}
              title={value.name}
              price={value.price_in_cents}
              key={index} 
              />
          )
          }
        </Feed>
      </Main>
  )
}
