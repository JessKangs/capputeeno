import { Header, SearchBar, Cart } from "../styles/header";
import Image from "next/image"
import search from "../public/search-loupe.svg"
import shopBag from "../public/shopping-bagshopping_bag.svg"
import { useRouter } from "next/router";

export default function Header_() {
    const router = useRouter();

    return (
        <Header>
            <h1>capputeeno</h1>
          
           <div>
                <SearchBar>
                    <input type="search" placeholder='Procurando por algo específico?' name="" id="" />
                    <Image src={search} alt="search" />
                </SearchBar>
           
                <Cart>
                    <Image onClick={() => router.push("/cart")} src={shopBag} alt="" />
                </Cart>
            </div>
        </Header>
    )
}