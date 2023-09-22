import { Header, SearchBar, Cart } from "../../styles/header";
import Image from "next/image"
import searchIcon from "../../public/search-loupe.svg"
import shopBag from "../../public/shopping-bagshopping_bag.svg"
import { useRouter } from "next/router";
import { useQuery } from '@apollo/client'
import { useState } from "react";
import { GET_CATEGORIES } from "../../query";

export default function Header_() {
    const router = useRouter();
    const [searchData, setSearchData] = useState('');
  
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    
    function search() {
        if(data != undefined) {
            let lowerSearch = searchData.toLowerCase();
            
            let result = data.allProducts
            .filter((value) => value.name.toLowerCase().includes(lowerSearch));

            localStorage.setItem("searchByProductName", JSON.stringify(result))

            router.push("/product_name")
        }
    }

    return (
        <Header>
            <h1>capputeeno</h1>
          
           <div>
                <SearchBar>
                    <input onChange={(e) => setSearchData(e.target.value)} type="search" placeholder='Procurando por algo específico?' />

                    <Image onClick={() => search()} src={searchIcon} alt="search" />
                </SearchBar>
           
                <Cart>
                    <Image onClick={() => router.push("/cart")} src={shopBag} alt="" />
                </Cart>
            </div>
        </Header>
    )
}