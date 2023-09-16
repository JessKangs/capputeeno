import styled from "styled-components";

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 100px 100px 0 100px;
`;

const Cart = styled.div`
    height: 800px;
    width: 60%;
    background-color: purple;
`;

const Item = styled.div`
    background-color: white;
    width: 400px;
    height: 160px;
`;

const Order = styled.div`
    height: 800px;
    width: 250px;
    background-color: white;
    position: fixed;
    right: 100px;
`;

export { Content, Cart, Item, Order };