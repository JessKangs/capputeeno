import { 
    Buttons, 
    Products, 
    Shirts, 
    Mugs, 
    Categories
  } from '../../styles/home'
  import Pages from './Pages'
  import Image from 'next/image'
  import arrow from "../../public/Arrows, Diagrams/Arrow.svg"

export default function Buttons_ ({menuSelect, setMenuSelect}) {
  
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
              <div>
                <h2>Organizar por</h2>
                <Image src={arrow} alt="button" />
              </div>

              <Pages />
            </Categories>

        </Buttons>
    )
}