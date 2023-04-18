import Hheader from "../../UI/Hheader/Hheader"
import { useState } from "react"
import cn from "classnames"

import ProductCounter from "../../UI/ProductCounter/ProductCounter"
import CustomText from "../../UI/CustomText/CustomText"


import Cross from "../../UI/Cross/Cross"
import { stateCartItem } from "../../modules/CartList/types/CartTypes"
import { useAppDispatch } from "../../store/store"
import { decProductCount, incProductCount, deleteProduct } from "../../modules/CartList/reducers/CartListSliice"

import styles from "./styles/CartItem.module.scss"


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
      <CustomText className = {styles.type} type="theSmallest" >{type}</CustomText>
      <ProductCounter className = {styles.counter} count={count} incCount={incCount} decCount = {decCount}/>
      <CustomText className = {cn(styles.price)} type="big">{price}</CustomText>
      <CustomText className = {styles.discount} type="discount">{discount}</CustomText>
      <Cross className = {styles.cross} onClick={deleteItem}/>
    </li>
  )
}
export default CartItem