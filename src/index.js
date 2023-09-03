import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Provider>
  </HouseContextProvider>

);
