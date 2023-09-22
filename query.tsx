import { gql } from '@apollo/client'

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

export { GET_CATEGORIES }