import React from 'react';

import styles from './App.module.scss';
import { IAppProps } from './IApp.interfase';
import HeaderModule from '../../modules/headerModule/HeaderModule';
import SaleModule from '../../modules/saleModule/SaleModule';
import PopularModule from '../../modules/popularModule/PopularModule';
import SalesLiderModule from '../../modules/salesLiderModule.tsx/SalesLiderModule';

function App({...props}: IAppProps): JSX.Element {
  return <div className='app'> 
          <HeaderModule/>
          <SaleModule/>
          <PopularModule/>
          <SalesLiderModule/>
        </div>;
}

export default App;