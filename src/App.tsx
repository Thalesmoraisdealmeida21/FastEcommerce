import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import Routes from './routes';
import { CartProvider } from './hooks/Cart';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes />
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </CartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
