import { useRouter } from "next/router";

export default function Product ({id, image, title, price}) {
    const router = useRouter()
    let newPrice = price/100;

    return (
        <div onClick={() => router.push({
            pathname: 'product',
            query: {id}
        })}>
            <img src={image} width={200} height={210} alt="" />
            <h3>{title}</h3>
            <span></span>
            <h2>R${newPrice.toFixed(2)}</h2>
        </div>
        
    );
}