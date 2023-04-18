import { ReactEventHandler, useState } from "react"
import CustomText from "../../UI/CustomText/CustomText"
import Hheader from "../../UI/Hheader/Hheader"
import Input from "../../UI/Input/Input"
import styles from "./styles/CartReceipt.module.scss"
import cn from "classnames"
import Button from "../../UI/Button/Button"
import { useAppSelector } from "../../store/store"


interface ICartReceiptProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className">{
  
}
const CartReceipt = ({className}: ICartReceiptProps) => {
  const [phonNumber, setPhoneNumber] = useState('')
  const {totalPrice, totalCount} = useAppSelector((state) => state.cartListReducer)
  const updatePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value)
  }


  return ( 
  <div className = {cn(styles.receipt, className)}>
    <Hheader className = {styles.header} type="h3">Детали заказа</Hheader>
    <CustomText className = {styles.count} type="small">Колличество</CustomText>
    <CustomText className = {styles.sum} type="small">Сумма</CustomText>
    <CustomText className = {styles.countNumber} type="medium">{totalCount}</CustomText>
    <CustomText className = {styles.sumNumber} type="medium">{totalPrice}</CustomText>
    <Input className = {styles.phone} value = {phonNumber} setValue={updatePhoneNumber}/>
    <Button className = {styles.buttom} appearance="primary">Заказать</Button>
  </div>)
}
export default CartReceipt