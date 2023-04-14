import styles from "./styles/Router.module.scss"
import {Routes, Route} from "react-router-dom"
import HomePage from "../HomePage"
import CartPage from "../CartPage"

interface IRouterProps {
  
}
const Router = ({}: IRouterProps) => (
  <div>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path="/cart" element={<CartPage/>} />
    </Routes>
  </div>
)
export default Router