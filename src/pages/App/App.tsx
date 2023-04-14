import React from 'react';
import Router from '../Router';
import styles from  './App.module.scss';
import { IAppProps } from './IApp.interfase';

function App({...props}: IAppProps): JSX.Element {
  return <div className = {styles.app}> 
          <Router />
         </div>;

}

export default App;