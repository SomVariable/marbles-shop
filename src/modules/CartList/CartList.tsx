import CartItem from "../../components/CartItem/CartItem"
import cn from "classnames"
import styles from "./styles/CartList.module.scss"
import { useAppSelector } from "../../store/store"
interface ICartListProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "className">{
  
}

const CartList = ({className}: ICartListProps) => {
  const products = useAppSelector((state) => state.cartListReducer.products)
  const productList = products.map(product => {
    return <CartItem key = {product.type} className = {styles.item} cartInfo = {product}/>
  })
  
  return <ul className = {cn(styles.list, className)}>
    {productList? productList: "empty"}
  </ul>
}
export default CartList