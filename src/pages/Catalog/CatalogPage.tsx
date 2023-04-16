import HeaderModule from "../../modules/headerModule/HeaderModule";
import Footer from "../../modules/footer/Footer";
import styles from './CatalogPage.module.scss';
import CatalogModule from "../../modules/catalogModule/CatalogModule";

const CatalogPage = () => {
  return (
    <>
    <HeaderModule/>
      <div className={styles.grow}>
        <CatalogModule/>
      </div>
    <Footer/>
    </>
  )
}
export default CatalogPage;