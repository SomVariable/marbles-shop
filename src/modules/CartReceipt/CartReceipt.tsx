import { ReactEventHandler, useState } from "react"
import CustomText from "../../UI/CustomText/CustomText"
import Hheader from "../../UI/Hheader/Hheader"
import Input from "../../UI/Input/Input"
import styles from "./styles/CartReceipt.module.scss"
import cn from "classnames"
import Button from "../../UI/Button/Button"


interface ICartReceiptProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className">{
  
}
const CartReceipt = ({className}: ICartReceiptProps) => {
  const [phonNumber, setPhoneNumber] = useState('')
  
  const updatePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value)
  }


  return ( 
  <div className = {cn(styles.receipt, className)}>
    <Hheader type="h4">Детали заказа</Hheader>
    <CustomText className = {styles.count} type="medium">Колличество</CustomText>
    <CustomText className = {styles.sum} type="medium">Сумма</CustomText>
    <CustomText className = {styles.countNumber} type="medium">1</CustomText>
    <CustomText className = {styles.sumNumber} type="medium">4 977,00</CustomText>
    <Input value = {phonNumber} setValue={updatePhoneNumber}/>
    <Button appearance="primary">Заказать</Button>
  </div>)
}
export default CartReceipt