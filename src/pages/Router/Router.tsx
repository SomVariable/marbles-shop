import styles from "./styles/Router.module.scss";
import {Routes, Route} from "react-router-dom";
import {Suspense, lazy} from 'react';
import Loader from '../Router/styles/loader.gif';

interface IRouterProps {
  
}

const Router = ({}: IRouterProps) => {

  const HomePage = lazy(() => import('../HomePage'));
  const CartPage = lazy(() => import('../CartPage'));
  const CatalogPage = lazy(() => import('../Catalog/CatalogPage'));


 return (
  <Suspense fallback={<div className={styles.loader}><img src={Loader} alt="Loader" /></div>}>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/catalog" element={<CatalogPage/>}/>
    </Routes>
  </Suspense>
 )
}

export default Router;