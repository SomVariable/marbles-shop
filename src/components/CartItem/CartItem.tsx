import Hheader from "../../UI/Hheader/Hheader"
import { useState } from "react"
import cn from "classnames"

import ProductCounter from "../../UI/ProductCounter/ProductCounter"
import CustomText from "../../UI/CustomText/CustomText"

import styles from "./styles/CartItem.module.scss"
import Cross from "../../UI/Cross/Cross"
import { stateCartItem } from "../../modules/CartList/types/CartTypes"
import { useAppDispatch } from "../../store/store"
import { decProductCount, incProductCount, deleteProduct } from "../../modules/CartList/reducers/CartListSliice"


interface ICartItemProps extends Pick<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "className" | "key">{
  cartInfo: stateCartItem
}
const CartItem = ({cartInfo, className }: ICartItemProps) => {
  const {type, categoryes, price, discount, composition, shape, description, count} = cartInfo
  const dispatch = useAppDispatch()

  const incCount = () => {
    dispatch(incProductCount(type))
  }
  const decCount = () => {
    dispatch(decProductCount(type))
  }
  const deleteItem = () => {
    dispatch(deleteProduct(type))
  }
  
  return (
    <li className = {cn(styles.cartItem, className)}>
      <img className = {styles.image} src="" alt="i wanna disappear" width="192px" height="166px" />
      <Hheader className = {styles.header} type="h4" >{type}</Hheader>
      <ProductCounter className = {styles.counter} count={count} incCount={incCount} decCount = {decCount}/>
      <CustomText className = {cn(styles.text, styles.price)} type="big">{price}</CustomText>
      <CustomText className = {cn(styles.text, styles.discount)} type="discount">{discount}</CustomText>
      <Cross className = {styles.cross} onClick={deleteItem}/>
    </li>
  )
}
export default CartItem