import React from 'react';
import ExampleModule from '../../modules/Example/ExampleModule';

import './App.module.scss';
import { IAppProps } from './IApp.interfase';
import Header from '../../components/header/Header';
import SubHeader from '../../components/subHeader/SubHeader';
import SaleSection from '../../components/saleSection/SaleSection';

function App({...props}: IAppProps): JSX.Element {
  return <div className="App"> 
  <Header/>
  <SaleSection/>
    </div>;
}

export default App;