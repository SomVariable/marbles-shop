import styles from "./styles/CartPage.module.scss"
import cn from "classnames"
import CartList from "../../modules/CartList"
import CartReceipt from "../../modules/CartReceipt"
import Hheader from "../../UI/Hheader/Hheader"
import { Link } from "react-router-dom"

interface ICartPageProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className">{
  
}

const CartPage = ({className}: ICartPageProps) => (
  <div className = {cn(styles.cart, className)}>
    <Hheader type = "h2">Корзина</Hheader>
    <div className = {styles.adress}>
      <Link to = "/">Главная</Link>/<Link to = "/cart">Корзина</Link>
    </div>
    <Link className = {styles.backLink} to = "/">Вернуться в магазин</Link>
    <CartList className = {styles.list}/>
    <CartReceipt className = {styles.recipt}/>
  </div>
)
export default CartPage