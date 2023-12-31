import styled from 'styled-components'
import { Saira_Stencil_One } from 'next/font/google'

const sairaStencilOne = Saira_Stencil_One({
  weight: "400",
  style: "normal",
  subsets: ['latin']

})

const Header = styled.header`
    background-color: white;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 100px 0 100px;
    position: fixed;
    z-index: 1;

    h1 {
      font-family: ${sairaStencilOne.style.fontFamily};
      font-size: 25px;
      margin: 0%;
    }

    div {
      width: 210px;
      display: flex;
      align-items: center;
    }

`

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    margin-left: 140%;

    input {
      width: 270px;
      height: 28px;
      border: 0;
      border-radius: 4px;
      background-color: whitesmoke;
      padding: 8px;
      z-index: 1;
      position: relative;
  
    }

    input::placeholder {
      font-size: 10px;
    }

    img{
      height: 18px;
      width: 18px;
      z-index: 2;
      position: absolute;
      right: 152px;
      cursor: pointer;
    }
`;

const Cart = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 20px;
    height: 18px;
    width: 18px;
  }
`;

export { 
    Header, 
    SearchBar, 
    Cart
}