
import { useRouter } from "next/router"
import { Content, Order } from "../styles/cart"
import MyCart from "../components/Cart/MyCart";

export default function Cart_ () {
    const router = useRouter();
    let cartItems = [];
    let cartTotal = 0;

    if(typeof window !== 'undefined') {
        cartItems.push(JSON.parse(localStorage.getItem("cartItem")))
    }

    if(cartItems[0] !== null) {
        cartItems[0].map((value) => cartTotal += value.price_in_cents)
    }

    function erase ({index}) {
        cartItems.splice(index, 1)

        if (cartItems.length === 0) {
            localStorage.removeItem("cartItem")
        } else {
            localStorage.removeItem("cartItem")
            localStorage.setItem("cartItem", JSON.stringify(cartItems))
        }
        
    }

    return (
        <Content>
            <MyCart 
                router={router} 
                cartItems={cartItems} 
                cartTotal={cartTotal}
                erase={erase}
                />
            
            <Order>
                <h1>RESUMO DO PEDIDO</h1>
                <h2>Subtotal de produtos R${null}</h2>
                <h2>Entrega R$40,00</h2>
                <span></span>
                <h3>Total R${null}</h3>
                <button>FINALIZAR A COMPRA</button>
            </Order>
        </Content>
    )
}