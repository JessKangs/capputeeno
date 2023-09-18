import { useRouter } from "next/router"
import { Back, Content, Description, AddToCart } from "../styles/productPage"
import { Main } from "../styles/sharedstyles";
import { useQuery, gql } from '@apollo/client'
import shopBag from "../public/shopping-bag.svg"
import back from "../public/Group.svg"
import Image from "next/image";

export default function product () {
    const router = useRouter();
    const id = router.query.id

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

    const { loading, error, data } = useQuery(GET_CATEGORIES);

    let item = undefined;

    if(data !== undefined) {
        item = data.allProducts.filter((value, index) => value.id === id)[0]
    }
    
    return (
        <Main>
            <Back onClick={() => router.push("/")}>
                <Image src={back} alt="back"/>
                Voltar
            </Back>
            {item !== undefined ?
            <Content>
                <img src={item.image_url} alt="" width={400} height={400}/>
                    <Description>
                        <h3>{item.category}</h3>
                        <h2>{item.name}</h2>
                        <h1>R$ {item.price}</h1>
                        <h5>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00</h5>
                        <h4>DESCRIÇÃO</h4>
                        <h5>{item.description}</h5>

                        <AddToCart>
                            <Image src={shopBag} alt="" />
                            ADICIONAR AO CARRINHO
                        </AddToCart>
                    </Description>  
            </Content>
             : null 
            }
        </Main>
    )
   
}

