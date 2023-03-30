import styles from "./styles/CartPage.module.scss"
import cn from "classnames"
import CartList from "../../modules/CartList"
import CartReceipt from "../../modules/CartReceipt"
import Hheader from "../../UI/Hheader/Hheader"

interface ICartPageProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className">{
  
}

const CartPage = ({className}: ICartPageProps) => (
  <div className = {cn(styles.cart, className)}>
    <Hheader type = "h2"/>
    <CartList/>
    <CartReceipt/>
  </div>
)
export default CartPage