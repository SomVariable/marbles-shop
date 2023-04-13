import styles from "./styles/HomePage.module.scss"
import { addProduct } from "../../modules/CartList";
import Button from "../../UI/Button/Button";
import { useAppDispatch } from "../../store/store";
import { Link } from "react-router-dom";
interface IHomePageProps {

}
type cartItem = {
  type: string,
  categoryes: [string],
  price: number,
  discount:number,
  composition: string,
  shape: string,
  description: string,
  count: number
}

const item: cartItem = {
  type: "Композиция шаров на день рождения",
  categoryes: ["som"],
  price: 2500,
  discount: 2700,
  composition: "asda",
  shape: "asda",
  description: "asda",
  count: 1
}


const HomePage = ({ }: IHomePageProps) => {
  const dispatch = useAppDispatch()

  const _addProduct = () => {
    dispatch(addProduct(item))
  }


  return <div>
      HomePage
      <Link to = "/cart">cart</Link>
      <Button appearance="primary" onClick={_addProduct}>add product</Button>
    </div>
}

export default HomePage