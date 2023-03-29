import React from 'react';
import ExampleModule from '../../modules/Example/ExampleModule';

import './App.module.scss';
import { IAppProps } from './IApp.interfase';
import Header from '../../components/header/Header';
import SubHeader from '../../components/subHeader/SubHeader';

function App({...props}: IAppProps): JSX.Element {
  return <div className="App"> 
  <Header/>
    </div>;
}

export default App;