import { useState } from "react"
import Button from "../../UI/Button/Button"
import Hheader from "../../UI/Hheader/Hheader"
import CustomIcon from "../../UI/Icon/Icon"
import Input from "../../UI/Input/Input"
import styles from "./Example.module.scss"
interface ExampleProps {
  
}
const ExampleComponent = ({}: ExampleProps) => {
  const [numn, setNum] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(e.target.value)
  }
  
  return <div>
    <Button appearance="option" isOption = {true}>option</Button>
    <div className={styles.primary}><Button appearance="primary">primary</Button></div>
    <div className={styles.primary2}><Button appearance="primary">У всех что в блоках размер задается из родителя!</Button></div>
    <div className={styles.secondary}><Button appearance="secondary">secondary</Button></div>
    <div className={styles.shadow}><Button appearance="shadow">shadow</Button></div>
    <CustomIcon type="cart"/>
    <CustomIcon type="instagram"/>
    <CustomIcon type="search"/>
    <CustomIcon type="shit"/>
    <div className={styles.testSearch}>
    <Input value={numn} setValue = {inputHandler} placeholder = {"Ваш номер телефона"} isSearch = {true}/>
    </div>
    <Hheader type = "h1">Распродажа в честь Нового года!</Hheader>
    <Hheader type = "h2">Популярные категории</Hheader>
    <Hheader type = "h2">Лидеры продаж</Hheader>
    <Hheader type = "h2">Акции</Hheader>
    <Hheader type = "h2">Наши работы</Hheader>
    <Hheader type = "h3">Контакты</Hheader>
    <Hheader type = "h3">Адрес</Hheader>

    <Hheader type = "h4">Баблобоксы</Hheader>
    <Hheader type = "h4">Фонтаны с цифрами</Hheader>

    <div className={styles.testInput}>

      <Input value={numn} setValue = {inputHandler} placeholder = {"Ваш номер телефона"}/>
    </div>
    
  </div>

}
export default ExampleComponent