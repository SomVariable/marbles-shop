import React from 'react';
import { IAppProps } from './IApp.interfase';
import HeaderModule from '../../modules/headerModule/HeaderModule';
import SaleModule from '../../modules/saleModule/SaleModule';
import PopularModule from '../../modules/popularModule/PopularModule';
import SalesLiderModule from '../../modules/salesLiderModule.tsx/SalesLiderModule';
import DiscountModule from '../../modules/discountModule/DiscountModule';
import StockModule from '../../modules/stockModule/StockModule';
import WorkSlider from '../../modules/worksSlider/WorkSlider';
import Footer from '../../modules/footer/Footer';

function App({...props}: IAppProps): JSX.Element {
  return <div className='app'> 
          <HeaderModule/>
          <SaleModule/>
          <PopularModule/>
          <SalesLiderModule/>
          <DiscountModule/>
          <StockModule/>
          <WorkSlider/>
          <Footer/>
        </div>;
}

export default App;