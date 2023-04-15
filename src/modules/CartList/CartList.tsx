import CartItem from "../../components/CartItem/CartItem"
import cn from "classnames"
import styles from "./styles/CartList.module.scss"
import { useAppSelector } from "../../store/store"
import { useState } from "react"
interface ICartListProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "className">{
  
}

type processType = {
  waiting  : boolean,
  confirmed: boolean,
  error    : boolean
}

const CartList = ({className}: ICartListProps) => {
  const products = useAppSelector((state) => state.cartListReducer.products)
  const productList = products.map(product => {
    return <CartItem key = {product.type} className = {styles.item} cartInfo = {product}/>
  })

  // const [processes, setProcesses] = useState({
  //     waiting  : false,
  //     confirmed: false,
  //     error    : false
  //   });

  //   // Interface for process changing. There culd be only one condition 
  //   const changeProcess = () => {
  //   const newState: processType = {
  //       waiting   : false,
  //       confirmed : false,
  //       error     : false
  //   }

  //   for(let process in newState){
  //       if(process === newProcess){
  //         newState[process] = true
  //       break
  //       }
  //   }
  //   setProcesses(newState)
  //   }
  
  return <ul className = {cn(styles.list, className)}>
    {productList.length > 0? productList: "empty"}
  </ul>
}
export default CartList