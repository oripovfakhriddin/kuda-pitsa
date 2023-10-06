import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/layout';
import HomePage from './pages/homePage/HomePage'
import CartPage from './pages/cartPage/CartPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';


function App() {

  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
        <Route element= { <Layout /> }>
          <Route index element={ <HomePage /> }/>
          <Route path='cart' element={ <CartPage /> }/>
        </Route>
        <Route path="*" element={ <PageNotFound /> }/>
      </Routes>
      </BrowserRouter>
      
    </Fragment>
  )
}

export default App;
