import { Back } from "../../styles/productPage"
import back from "../../public/Group.svg"
import Image from "next/image"
import trashCan from "../../public/Trash, Delete, Bin.svg"
import { Cart, H3, H4, Item } from "../../styles/cart"

export default function MyCart({router, cartItems, cartTotal, erase}) { 
    console.log(cartItems)
    return (
    <Cart>
        <Back onClick={() => router.push("/")}>
            <Image src={back} alt="back"/>
                Voltar
        </Back>
            <h2 style={{ fontSize: 18, fontWeight: 400}}>
                SEU CARRINHO
            </h2>

            <div style={{ display:"flex", alignItems:"center", height: 30}}>

                <H3> 
                    Total ({typeof cartItems != 'undefined' ? cartItems.length : 0} produtos)
                </H3>

                <H4> R${(cartTotal/100).toFixed(2)}</H4>

            </div>

                { cartItems !== null ?

                    cartItems.map((item, index) => 

                        <Item key={index}>
                            <img src={item.image_url} alt="product image" width={50} height={50}/>
                            <div>
                                <h2>
                                    {item.name}
                                    <Image style={{ height: 15, width: 15, marginLeft: 40, position:"absolute" }}
                                    onClick={() => erase(index)}
                                    src={trashCan} alt=""/>
                                </h2>
                                
                                <h3>{item.description}</h3>
                                <h3>{(item.price_in_cents/100).toFixed(2)}</h3>
                            </div>
                        </Item>

                    ) 
                    : 
                    null    
                }    
    </Cart>
    )
}