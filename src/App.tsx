import React from 'react';
import logo from './logo.svg';
import './App.css';

interface iWannaDisapere {

}

export interface IAppProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name : string, 
  iWannaDisapere: iWannaDisapere,
}

function App({...props}: IAppProps): JSX.Element {
  return <div className="App">

    </div>;
}

export default App;
