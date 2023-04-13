import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/App/App';
import { BrowserRouter as Rourer } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Provider store = {store}>
      <Rourer>
        <App />
      </Rourer>
    </Provider>
  </>
);

