import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Checkbox from './UI/checkbox/Checkbox';
import SaleSection from './components/saleSection/SaleSection';
import Header from './components/header/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <Header/>
  <SaleSection/>
  <Checkbox/>
  </>
);


