import styled from "styled-components";
import { Saira } from 'next/font/google'

const saira = Saira({
  weight: ["100","400","600"],
  style: "normal",
  subsets: ['latin']

})

const Buttons = styled.div`
    width: 700px;
    height: 80px;
    display: flex;
    justify-content: space-between;

    span {
        display: flex;
        justify-content: space-between;
        width: 300px;
        height: 50px;
    }

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
    text-decoration-thickness: ${props => props.$primary === 1 ? "3px" : ""};
    font-family: ${saira.style.fontFamily};
`;

const Shirts = styled.h2<{$primary?: number}>`
    cursor: pointer;
    font-weight: ${props => props.$primary === 2 ? "600" : "400"};
    text-decoration: ${props => props.$primary === 2 ? "underline" : ""};
    text-decoration-color: ${props => props.$primary === 2 ? "#FFA585" : ""} ;
    text-decoration-thickness: ${props => props.$primary === 2 ? "3px" : ""};
    font-family: ${saira.style.fontFamily};  
`;

const Mugs = styled.h2<{$primary?: number}>`
    cursor: pointer;
    font-weight: ${props => props.$primary === 3 ? "600" : "400"};
    text-decoration: ${props => props.$primary === 3 ? "underline" : ""};
    text-decoration-color: ${props => props.$primary === 3 ? "#FFA585" : ""} ;
    text-decoration-thickness: ${props => props.$primary === 3 ? "3px" : ""};
    font-family: ${saira.style.fontFamily};
`;

const Categories = styled.div`
    width: 240px;
    height: 100px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    h2 {
        font-family: ${saira.style.fontFamily};
        font-weight: 400;
        margin-left: 70px;
    }

    img {
        width: 18px;
        height: 18px;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 70px;
`

const Layout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const PageNum = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background-color: #E9E9F0;
    font-size: 14px;
    font-family: ${saira.style.fontFamily};
    font-weight: 400;
`;

const Feed = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-family: ${saira.style.fontFamily};
    
    div {
        width: 200px;
        height: 275px;
        background-color: #ffffff;
        margin-bottom: 15px;
        border-radius: 8px 8px 0 0;
    }

    span {
        display: flex;
        height: 1px;
        width: 90%;
        background-color: #DCE2E5;
        margin-left: 10px;
    }

    img {
        border-radius: 6px 6px 0 0;
    }

    h3 {
        font-weight: 400;
        font-size: 14px;
        width: 200px;
        margin: 0px 0 6px 10px;
    }

    h2 {
        font-weight: 800;
        margin: 6px 0 0 10px;
    }
`;

export { 
    Buttons, 
    Products, 
    Shirts, 
    Mugs,
    Div, 
    Categories,
    Layout,
    PageNum,
    Feed 
};