import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';

import GlobalStyle from './global/style';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
