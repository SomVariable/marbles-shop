import React from 'react';

import styles from './App.module.scss';
import { IAppProps } from './IApp.interfase';
import HeaderModule from '../../modules/headerModule/HeaderModule';
import SaleModule from '../../modules/saleModule/SaleModule';

function App({...props}: IAppProps): JSX.Element {
  return <div className='app'> 
          <HeaderModule/>
          <SaleModule/>
        </div>;
}

export default App;