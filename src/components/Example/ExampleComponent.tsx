import Button from "../../UI/Button/Button"
import styles from "./styles/Example.module.scss"
interface ExampleProps {
  
}
const ExampleComponent = ({}: ExampleProps) => (
  <div>
    <Button appearance = "option" isOption = {true} >Католог</Button>
    <Button  appearance = "primary">В корзину</Button>
    <Button  appearance = "secondary">Доавить в корзину</Button>
    <div style = {{
      backgroundColor: 'black',
      padding: "10px",
      margin: "20px"
    }}><Button  appearance = "shadow">Получить скидку</Button>
    </div>
  </div>

)
export default ExampleComponent