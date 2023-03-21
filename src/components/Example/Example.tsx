import Button from "../../UI/Button/Button"
import styles from "./styles/Example.module.scss"
interface ExampleProps {
  
}
const Example = ({}: ExampleProps) => (
  <div>Example 2
    <Button appearance = "primary" isOption = {true} >Католог</Button>
    <Button  appearance = "secondary">В корзину</Button>
    <Button  appearance = "primary">Доавить в корзину</Button>
  </div>
)
export default Example