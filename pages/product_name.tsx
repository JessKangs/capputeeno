import Product from "../components/Home/Product"
import { Feed } from "../styles/home"
import { Main } from "../styles/sharedstyles"

export default function searchByProductName() {
    let search = JSON.parse(localStorage.getItem("searchByProductName"))
    return (
        <Main>
            <Feed>
            {search.map((value, index) => 
            <Product
                id={value.id} 
                image={value.image_url}
                title={value.name}
                price={value.price_in_cents} 
                key={index}
                />)}
            </Feed>
        </Main>
    
    )
}