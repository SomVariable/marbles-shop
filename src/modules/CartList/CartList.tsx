import CartItem from "../../components/CartItem/CartItem"
import cn from "classnames"
import styles from "./styles/CartList.module.scss"
import { useAppSelector } from "../../store/store"
import { useState, useEffect } from "react"
import { ComponentStateMachine } from "../../components/ComponentStateMachine/ComponentStateMachine"
import defineProcess from "../../components/ComponentStateMachine/utils/defineProcess"
import { procesesType } from "../../components/ComponentStateMachine/types/ComponentStateMachineTypes"
interface ICartListProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "className"> {

}

const CartList = ({ className }: ICartListProps) => {
  const products = useAppSelector((state) => state.cartListReducer.products)
  const productList = products.map(product => {
    return <CartItem key={product.type} className={styles.item} cartInfo={product} />
  })

  const [processes, setProcesses] = useState<procesesType>({
    waiting: false,
    confirmed: false,
    noData: false,
    error: false
  });

  const changeProcess = (newProcess: "waiting" | "confirmed" | "noData" | "error") => {
    const newState: procesesType = {
      waiting: false,
      confirmed: false,
      noData: false,
      error: false
    }

    for (let process in newState) {
      if (process === newProcess) {
        newState[process] = true
        break
      }
    }
    setProcesses(newState)
  }

  useEffect(() => {
    changeProcess("noData")
  }, [])

  useEffect(() => {

    if (!products) {
      changeProcess("error")
    } else if (products.length === 0) {
      changeProcess("noData")
    } else if (products.length > 0) {
      changeProcess("confirmed")
    }

  }, [products])

  return <ul className={cn(styles.list, className)}>
    <ComponentStateMachine process={defineProcess(processes)} confirmed={() => productList} />
  </ul>
}
export default CartList