import styled from "styled-components";
import { Saira } from 'next/font/google'

const saira = Saira({
  weight: ["100","400","600"],
  style: "normal",
  subsets: ['latin']

})

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 100px 100px 0 100px;
`;

const Cart = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: ${saira.style.fontFamily};
`;

const H3 = styled.h3`
    font-size: 12px; 
    font-weight: 100;
    margin: 0;
`;

const H4 = styled.h4`
    font-size: 12px; 
    margin-left: 7px;
`;

const Item = styled.div`
    background-color: white;
    width: 100%;
    height: 140px;
    margin-top: 10px;
    display: flex;
    border-radius: 4px;
    font-family: ${saira.style.fontFamily};


    img {
        height: 100%;
        width: 140px;
        border-radius: 4px 0 0 4px;
    }

    div {
        padding: 0 15px 10px 15px;
        position: relative;
    }

    h2 {
        font-size: 16px;
        font-weight: 100;
    }

    h3 {
        font-size: 10px;
        font-weight: 100;
        height: 45px;
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 0px
        }
    }
`;

const Order = styled.div`
    height: 800px;
    width: 250px;
    background-color: white;
    position: fixed;
    right: 100px;
`;

export { Content, Cart, H3, H4, Item, Order };