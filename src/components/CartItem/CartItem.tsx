import Hheader from "../../UI/Hheader/Hheader"
import { useState } from "react"
import cn from "classnames"

import ProductCounter from "../../UI/ProductCounter/ProductCounter"
import CustomText from "../../UI/CustomText/CustomText"

import styles from "./styles/CartItem.module.scss"

export type cartItem = {
  type: string,
  categoryes: [string],
  price: number,
  discount:number,
  composition: string,
  shape: string,
  description: string
}

interface ICartItemProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className">{
  cartInfo: cartItem
}
const CartItem = ({cartInfo, className }: ICartItemProps) => {
  const [count, setCount] = useState(1)
  const {type, categoryes, price, discount, composition, shape, description} = cartInfo
  
  return (
    <div className = {cn(styles.cartItem, className)}>
      <img className = {styles.image} src="" alt="i wanna disappear" width="192px" height="166px" />
      <Hheader className = {styles.header} type="h4" >{type}</Hheader>
      <ProductCounter className = {styles.counter} count={count} setCount={setCount}/>
      <CustomText className = {cn(styles.text, styles.price)} type="big">{price}</CustomText>
      <CustomText className = {cn(styles.text, styles.discount)} type="discount">{discount}</CustomText>
    </div>
  )
}
export default CartItem