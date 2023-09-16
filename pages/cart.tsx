import { Back } from "../styles/productPage"
import back from "../public/Group.svg"
import Image from "next/image"
import { useRouter } from "next/router"
import { Content, Cart, Item, Order } from "../styles/cart"
import { baseProducts } from "../provisoryApi";

export default function Cart_ () {
    const router = useRouter();
    const item = baseProducts[0]

    return (
        <Content>
            <Cart>
                <Back onClick={() => router.push("/")}>
                    <Image src={back} alt="back"/>
                    Voltar
                </Back>
                <h2>SEU CARRINHO</h2>
                <h3>Total {} produtos</h3>

                <Item>
                    <img src={item.image_url} alt="product image" width={50} height={50}/>
                    <h2>{item.name}</h2>
                    <h3>{item.description}</h3>
                </Item>
            </Cart>
            <Order>
                one
            </Order>
        </Content>
    )
}