import { useState } from "react"
import Button from "../../UI/Button/Button"
import CustomIcon from "../../UI/Icon/Icon"
import Input from "../../UI/Input/Input"
import styles from "./Example.module.scss"
interface ExampleProps {
  
}
const ExampleComponent = ({}: ExampleProps) => {
  const [numn, setNum] = useState("1");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(e.target.value)
  }
  
  return <div>

    <CustomIcon type="cart"/>
    <CustomIcon type="instagram"/>
    <CustomIcon type="search"/>
    <CustomIcon type="shit"/>
    <div className={styles.testSearch}>
    <Input value={numn} setValue = {inputHandler} placeholder = {"Ваш номер телефона"} isSearch = {true}/>
    </div>

    <div className={styles.testInput}>

      <Input value={numn} setValue = {inputHandler} placeholder = {"Ваш номер телефона"}/>
    </div>
    
  </div>

}
export default ExampleComponent