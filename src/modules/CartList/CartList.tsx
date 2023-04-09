import CartItem, { cartItem } from "../../components/CartItem/CartItem"
import cn from "classnames"
import styles from "./styles/CartList.module.scss"
interface ICartListProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className">{
  
}

const item: cartItem =  { 
  type: "Композиция шаров на день рождения",
  categoryes: ["som"],
  price: 2500,
  discount: 2700,
  composition: "asda",
  shape: "asda",
  description: "asda"
}

const CartList = ({className}: ICartListProps) => (
  <div className = {cn(styles.list, className)}>
    <CartItem className = {styles.item} cartInfo = {item}/>
    <CartItem className = {styles.item} cartInfo = {item}/>
    <CartItem className = {styles.item} cartInfo = {item}/>
    <CartItem className = {styles.item} cartInfo = {item}/>
  </div>
)
export default CartList