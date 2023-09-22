
import { useRouter } from "next/router"
import { Content, Order } from "../styles/cart"
import MyCart from "../components/Cart/MyCart";

export default function Cart_ () {
    const router = useRouter();
    let cartItems;
    let cartTotal = 0;

    if(typeof window !== 'undefined') {
       cartItems = JSON.parse(localStorage.getItem("cartItem"))

       if(cartItems !== null) {
        cartItems.map((value) => cartTotal += value.price_in_cents)
    }
    }

    function erase (index) {
        cartItems.splice(index, 1)
        
        if(cartItems.length === 0) {
            localStorage.removeItem("cartItem")
            alert("Carrinho vazio!")
            router.push("/")
        } else {
            localStorage.removeItem("cartItem")
            localStorage.setItem("cartItem", JSON.stringify(cartItems));
            alert('Item removido do seu carrinho!')
            router.push("/")
            router.push("/cart")
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
                <div>
                    <h2>Subtotal de produtos</h2>
                    <h2>R${(cartTotal/100).toFixed(2)}</h2>
                </div>
                <div>
                    <h2>Entrega </h2>
                    <h2>R$40,00</h2>
                </div>
                <span></span>
                <div>
                    <h3>Total</h3>
                    <h3>R${(cartTotal/100 + 40).toFixed(2)}</h3>
                </div>
                <button>FINALIZAR A COMPRA</button>
                    <h2 style={{margin: 0, textDecoration: "underline"}}>AJUDA</h2>
                    <h2 style={{margin: 0, textDecoration: "underline"}}>REEMBOLSOS</h2>
                    <h2 style={{margin: 0, textDecoration: "underline"}}>ENTREGAS E FRETE</h2>
                    <h2 style={{margin: 0, textDecoration: "underline"}}>TROCAS E DEVOLUÇÕES</h2>
            </Order>
        </Content>
    )
}