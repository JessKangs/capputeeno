import { createGlobalStyle } from 'styled-components'


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
