import React from 'react';
import ExampleModule from '../../modules/Example/ExampleModule';

import './App.module.scss';
import { IAppProps } from './IApp.interfase';
import CartList from '../../modules/CartList/CartList';
import CartReceipt from '../../modules/CartReceipt/CartReceipt';
import Hheader from '../../UI/Hheader/Hheader';


function App({...props}: IAppProps): JSX.Element {
  return <div className="App"> 
  {/* <ExampleModule /> */}
    <Hheader type='h2'>Корзина</Hheader>
    <CartList />
    <CartReceipt />
    </div>;
}

export default App;