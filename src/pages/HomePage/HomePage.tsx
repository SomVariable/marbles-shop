import styles from "./styles/HomePage.module.scss"
import { addProduct } from "../../modules/CartList";
import Button from "../../UI/Button/Button";
import { useAppDispatch } from "../../store/store";
import { Link, useNavigate } from "react-router-dom";
import { cartItem } from "../../modules/CartList/types/CartTypes";
import Hheader from "../../UI/Hheader/Hheader";
interface IHomePageProps {

}


const item: cartItem = {
  type: "Композиция шаров на день рождения",
  categoryes: ["som"],
  price: 2500,
  discount: 2700,
  composition: "asda",
  shape: "asda",
  description: "asda"
}
const item2: cartItem = {
  type: "что-то другое",
  categoryes: ["som"],
  price: 53,
  discount: 2700,
  composition: "asda",
  shape: "asda",
  description: "asda"
}
const item3: cartItem = {
  type: "что-то третье",
  categoryes: ["som"],
  price: 1,
  discount: 2700,
  composition: "asda",
  shape: "asda",
  description: "asda"
}


const HomePage = ({ }: IHomePageProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const _addProduct1 = () => {
    dispatch(addProduct(item))
  }
  const _addProduct2 = () => {
    dispatch(addProduct(item2))
  }
  const _addProduct3 = () => {
    dispatch(addProduct(item3))
  }

  function handleClick() {
    navigate('/product', { state: { product: item } });
  }

  return <div>
      HomePage
      <Link to = "/cart">cart</Link>
      <div className="">
        <Hheader type = "h1">Распродажа</Hheader>
        <Hheader type = "h2">Популярные категории</Hheader>
        <Hheader type = "h3">Композиция шаров на день рождения</Hheader>
      </div>
      <Button appearance="primary" onClick={_addProduct1}>add product1</Button>
      <Button appearance="primary" onClick={_addProduct2}>add product2</Button>
      <Button appearance="primary" onClick={_addProduct3}>add product3</Button>
      <Button appearance="primary" onClick={handleClick}>choose product</Button>
    </div>
}

export default HomePage