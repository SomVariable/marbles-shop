import React from 'react';
import ExampleModule from '../../modules/Example/ExampleModule';

import './App.module.scss';
import { IAppProps } from './IApp.interfase';
import HeaderModule from '../../modules/headerModule/HeaderModule';

function App({...props}: IAppProps): JSX.Element {
  return <div className="App"> 
  {/* <ExampleModule /> */}
      <HeaderModule/>
    </div>;
}

export default App;