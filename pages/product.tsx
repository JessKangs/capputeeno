import { useRouter } from "next/router"
import styled from "styled-components";
import { Main } from "../styles/sharedstyles";
import { baseProducts } from "../provisoryApi";
import shopBag from "../public/shopping-bagshopping_bag.svg"
import Image from "next/image";

export default function product () {
    const router = useRouter();
    const id = Number(router.query.id)
    const item = baseProducts.filter((value, index) => value.id === id)[0]
    
    return (
        <Main>
            <Back></Back>
            {item != undefined ?
            <Content>
                <img src={item.image_url} alt="" width={400} height={400}/>
                    <Description>
                        <h3>{item.category}</h3>
                        <h2>{item.name}</h2>
                        <h1>{item.price}</h1>
                        <h4>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00</h4>
                        <h3>DESCRIÇÃO</h3>
                        <h4>{item.description}</h4>

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

const Back = styled.div``

const Content = styled.div`
    display: flex;
    flex-direction: row;
`

const Description = styled.div`
    width: 300px;
    height: 400px;
    margin-left: 20px;
`

const AddToCart = styled.button`
    width: 100%;
    height: 30px;
    border: 0;
    border-radius: 4px;
    background-color: #115D8C;
`;
