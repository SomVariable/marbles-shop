import React from 'react';
import Module from '../../modules/TestModule';
import Module2 from '../../modules/TestModule2';
import './App.module.scss';
import { IAppProps } from './IApp.interfase';


function App({...props}: IAppProps): JSX.Element {
  return <div className="App"> 
      <Module />
      <Module2 />
    </div>;
}

export default App;