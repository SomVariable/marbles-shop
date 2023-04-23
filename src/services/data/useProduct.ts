import { useLocation } from "react-router-dom"
import { cartItem } from "../../modules/CartList/types/CartTypes";


export const useProduct = (): cartItem => {
    const location = useLocation(); 
    return location.state.product
}