import Hheader from "src/UI/Hheader/Hheader"
import styles from "./styles/ProductPage.module.scss"
import CustomText from "src/UI/CustomText/CustomText"
import cn from "classnames"
import Button from "src/UI/Button/Button"
import { useProduct } from "src/services/data/useProduct"

interface IProductPageProps {
  
}
const ProductPage = ({}: IProductPageProps) => {
  const product = useProduct();
  debugger
  
  return <div className = {styles.productPage}>
    <Hheader className = {styles.productHeader} type="h3">{product.type}</Hheader>
    <img className = {styles.productaImage} src="/" alt="Изображение товара" />
    <div className = {styles.productPriceBlock}>
      <CustomText className = {styles.price} type="big">{product.price}</CustomText>
      <CustomText className = {styles.discount} type="discount">{product.discount}</CustomText>
    </div>
    <Button appearance="primary">В корзину</Button>
    <div className = {styles.productInformatin}>
      <CustomText className = {styles.discount} type="smallBold">Состав:</CustomText>
      <CustomText className = {styles.price} type="small">{product.composition}</CustomText>
    </div>

  </div>
}
export default ProductPage