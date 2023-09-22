import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from "../query";
import Product from "../components/Home/Product";

function useMugsPages (start:number, limit: number) {
    let mugsCategory = [];
    let pagesMugs = [];
  
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    if ( data !== undefined ) {

      mugsCategory = data.allProducts.filter((value, index) => value.category === 'mugs')

      pagesMugs = [...mugsCategory].splice(start,limit);

      }

    return(
        pagesMugs.map((value, index) => 
              <Product
                id={value.id} 
                image={value.image_url}
                title={value.name}
                price={value.price_in_cents} 
                key={index}
                />)
    )
}

function useProductsPages(start:number, limit: number) {
    let products = [];
    let pagedProducts = [];
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if ( data !== undefined ) {
      
        products = data.allProducts;
  
        pagedProducts = [...products].splice(start,limit);

        }
    
    return(
        pagedProducts.map((value, index) => 
              <Product
                id={value.id} 
                image={value.image_url}
                title={value.name}
                price={value.price_in_cents} 
                key={index}
                />)
    )
}

function useTshirtsPages (start:number, limit: number) {
    let shirtsCategory = [];
    let pagedShirts = [];
  
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    if ( data !== undefined ) {

      shirtsCategory = data.allProducts.filter((value, index) => value.category === 't-shirts')

      pagedShirts = [...shirtsCategory].splice(start,limit);

      }

    return(
        pagedShirts.map((value, index) => 
              <Product
                id={value.id} 
                image={value.image_url}
                title={value.name}
                price={value.price_in_cents} 
                key={index}
                />)
    )
}

export { useProductsPages, useMugsPages, useTshirtsPages }