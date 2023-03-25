import Button from "../../UI/Button/Button"
import CustomIcon from "../../UI/Icon/Icon"
import styles from "./styles/Example.module.scss"
interface ExampleProps {
  
}
const ExampleComponent = ({}: ExampleProps) => (
  <div>

    <CustomIcon type="cart"/>
    <CustomIcon type="instagram"/>
    <CustomIcon type="search"/>
    <CustomIcon type="shit"/>

  </div>

)
export default ExampleComponent