import styled from 'styled-components'
import { Saira_Stencil_One } from 'next/font/google'
import Image from 'next/image'

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
    justify-content: space-between;
    padding: 0 100px 0 100px;
    position: fixed;

    h1 {
      font-family: ${sairaStencilOne.style.fontFamily};
      font-size: 25px;
      margin: 0%;
    }

    div {
      width: 220px;
      display: flex;
      align-items: center;
    }

`

const SearchBar = styled.div`
    display: flex;
    align-items: center;

    input {
      margin: 0%;
      width: 220px;
      height: 26px;
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
      right: 105px;
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