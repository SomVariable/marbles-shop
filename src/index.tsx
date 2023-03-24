import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Checkbox from './UI/checkbox/Checkbox';
import SaleSection from './components/saleSection/SaleSection';
import Header from './components/header/Header';
import Title from './UI/title/Title';
import Input from './UI/input/Input';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <Header/>
  <SaleSection/>
  <Checkbox>
  Товары со скидкой
  </Checkbox>
  <Title>
  Популярные категории
  </Title>
  <Input placeholder='Ваш номер телефона' className='some' type='text'/>
  </>
);


