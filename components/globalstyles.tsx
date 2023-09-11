import { createGlobalStyle } from 'styled-components'
import { Saira } from 'next/font/google'

const saira = Saira({
  weight: ["100","300", "500"],
  style: "normal",
  subsets: ['latin']

})

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: whitesmoke;
    padding: 0;
    margin: 0;
    font-weight: 100;
    font-style: normal;
    font-size: 8px;
    color: #515151;
    font-family: ${saira.style.fontFamily};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
