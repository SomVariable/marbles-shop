import styles from "./styles/HomePage.module.scss"
import HeaderModule from "../../modules/headerModule/HeaderModule";
import SaleModule from "../../modules/saleModule/SaleModule";
import PopularModule from "../../modules/popularModule/PopularModule";
import SalesLiderModule from "../../modules/salesLiderModule.tsx/SalesLiderModule";
import DiscountModule from "../../modules/discountModule/DiscountModule"; 
import StockModule from "../../modules/stockModule/StockModule";
import WorkSlider from "../../modules/worksSlider/WorkSlider";
import Footer from "../../modules/footer/Footer";

const HomePage = () => {
  return(
    <>
    <HeaderModule/>
    <SaleModule/>
    <PopularModule/>
    <SalesLiderModule/>
    <DiscountModule/>
    <StockModule/>
    <WorkSlider/>
    <Footer/>
    </>
  )
}
export default HomePage;