import styled from "styled-components";
import { Saira } from 'next/font/google'

const saira = Saira({
  weight: ["100","400","600"],
  style: "normal",
  subsets: ['latin']

})

const Back = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    top: 75px;
    font-family: ${saira.style.fontFamily};
    font-size: 14px;
    
    img {
        margin-right: 8px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    font-family: ${saira.style.fontFamily};
    margin-top: 30px;
`

const Description = styled.div`
    width: 300px;
    height: 400px;
    margin-left: 20px;

    h3 {
        font-size: 15px;
        font-weight: 500;
        margin-top: 0;
    }

    h2 {
        font-size: 20px;
        font-weight: 500;
        margin: 0;
    }

    h1 {
        margin-top: 5px;
        color: black;
        
    }

    h5 {
        font-size: 10px;
        font-weight: 400;
        margin: 0;
    }

    h4 {
        margin-top: 12px;
        font-size: 12px;
        font-weight: 500;
    }
`

const AddToCart = styled.button`
    width: 100%;
    height: 30px;
    border: 0;
    border-radius: 4px;
    background-color: #115D8C;
    margin-top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: ${saira.style.fontFamily};

    img {
        margin-right: 10px;
        color: white;
        height: 18px;
        width: 18px;
    }
`;

export { Back, Content, Description, AddToCart }