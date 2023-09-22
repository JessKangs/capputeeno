import Product from "../components/Home/Product"
import { Feed } from "../styles/home"
import { Main } from "../styles/sharedstyles"
import { Back } from "../styles/productPage"
import back from "../public/Group.svg"
import Image from "next/image";
import { useRouter } from "next/router"

export default function searchByProductName() {
    const router = useRouter();
    let search = JSON.parse(localStorage.getItem("searchByProductName"))
    
    return (
        <Main>
            <Back onClick={() => router.push("/")}>
                <Image src={back} alt="back"/>
                Voltar
            </Back>
            <Feed style={{marginTop: 20}}>
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