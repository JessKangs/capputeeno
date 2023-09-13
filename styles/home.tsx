import styled from "styled-components";
import { Saira } from 'next/font/google'

const saira = Saira({
  weight: ["100","400","600"],
  style: "normal",
  subsets: ['latin']

})

const Buttons = styled.div`
    width: 300px;
    height: 60px;
    display: flex;
    justify-content: space-between ;
    align-items: center;
    margin-left: 100px;

    h2 {
        margin: 0;
       ;
    }
`

const Products = styled.h2<{$primary?: number}>`
    cursor: pointer;
    font-weight: ${props => props.$primary === 1 ? "600" : "400"};
    text-decoration: ${props => props.$primary === 1 ? "underline" : ""};
    text-decoration-color: ${props => props.$primary === 1 ? "#FFA585" : ""} ;
    font-family: ${saira.style.fontFamily};
`;

const Shirts = styled.h2<{$primary?: number}>`
    cursor: pointer;
    font-weight: ${props => props.$primary === 2 ? "600" : "400"};
    text-decoration: ${props => props.$primary === 2 ? "underline" : ""};
    text-decoration-color: ${props => props.$primary === 2 ? "#FFA585" : ""} ;
    font-family: ${saira.style.fontFamily};  
`;

const Mugs = styled.h2<{$primary?: number}>`
    cursor: pointer;
    font-weight: ${props => props.$primary === 3 ? "600" : "400"};
    text-decoration: ${props => props.$primary === 3 ? "underline" : ""};
    text-decoration-color: ${props => props.$primary === 3 ? "#FFA585" : ""} ;
    font-family: ${saira.style.fontFamily};
`;

const Categories = styled.div`
    position: fixed;
    right: 100px;
    top: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
        font-family: ${saira.style.fontFamily};
        font-weight: 400;
        margin-right: 5px;
    }

    img {
        width: 18px;
        height: 18px;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

const Layout = styled.div`
    width: 110%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const PageNum = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: #E9E9F0;
    font-size: 16px;
    font-family: ${saira.style.fontFamily};
    font-weight: 400;
`;

export { 
    Buttons, 
    Products, 
    Shirts, 
    Mugs, 
    Categories,
    Layout,
    PageNum 
};