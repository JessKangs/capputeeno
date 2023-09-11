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
    justify-content: space-between;
    align-items: center;
    padding: 0 100px 0 100px;

    h1 {
      font-family: ${sairaStencilOne.style.fontFamily};
      font-size: 25px;
      margin: 0%;
    }

    input {
      margin: 0%;
      width: 200px;
      height: 26px;
      border: 0;
      border-radius: 4px;
      background-color: whitesmoke;
      padding: 5px;
    }
    input::placeholder {
      font-size: 10px;
    }
`


const Main = styled.main`
 
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

export { Header, Main, Title, Description, CodeTag }
