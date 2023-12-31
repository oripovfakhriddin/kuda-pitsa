import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.scss'
import { ToastContainer } from 'react-toastify'
import LanguageContextProvider from './contexts/LanguageContext.jsx';
import CartContextProvider from './contexts/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <LanguageContextProvider>
      <CartContextProvider>
        <ToastContainer />
        <App />
      </CartContextProvider>
    </LanguageContextProvider>
    
  </React.StrictMode>
  
)
