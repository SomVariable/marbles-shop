import React from 'react';
import ExampleModule from '../../modules/Example/ExampleModule';

import './App.module.scss';
import { IAppProps } from './IApp.interfase';


function App({...props}: IAppProps): JSX.Element {
  return <div className="App"> 
  <ExampleModule />
    </div>;
}

export default App;