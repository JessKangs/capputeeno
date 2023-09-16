import { useRouter } from "next/router";

export default function Product ({id, image, title, price}) {
    const router = useRouter()

    return (
        <div onClick={() => router.push({
            pathname: 'product',
            query: {id}
        })}>
            <img src={image} width={200} height={210} alt="" />
            <h3>{title}</h3>
            <span></span>
            <h2>R${price}</h2>
        </div>
        
    );
}