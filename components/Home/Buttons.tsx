import { 
    Buttons, 
    Products, 
    Shirts, 
    Mugs, 
    Categories,
    Div
  } from '../../styles/home'
  import Pages from './Pages'
  import Image from 'next/image'
  import arrow from "../../public/Arrows, Diagrams/Arrow.svg"

export default function Buttons_ ({
  menuSelect, 
  setMenuSelect, 
  setInicial,
  initial
}) {
  
    return (
        <Buttons >
            <span>
              
              <Products $primary={menuSelect}
                onClick={() => { 
                  setMenuSelect(1)
                  }}>
                  TODOS OS PRODUTOS
              </Products>

              <Shirts $primary={menuSelect}
                onClick={() => { 
                  setMenuSelect(2)
                  }}>
                  CAMISETAS
              </Shirts>

              <Mugs $primary={menuSelect}
                onClick={() => { 
                  setMenuSelect(3)
                  }}>
                  CANECAS
              </Mugs>

            </span>

            <Categories>
              <Div>
                <h2>Organizar por</h2>
                <Image src={arrow} alt="button" />
              </Div>

              <Pages 
                setInicial={setInicial}
                initial={initial}
                />
            </Categories>

        </Buttons>
    )
}