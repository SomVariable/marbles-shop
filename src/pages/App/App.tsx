import React from 'react';
import ExampleModule from '../../modules/Example/ExampleModule';
import Router from '../Router';

import './App.module.scss';
import { IAppProps } from './IApp.interfase';


function App({...props}: IAppProps): JSX.Element {
  return <div className="App"> 
  <ExampleModule />
  <Router />
    </div>;
}

export default App;