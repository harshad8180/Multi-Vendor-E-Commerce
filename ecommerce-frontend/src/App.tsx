
import { ThemeProvider } from '@mui/material'
import './App.css'
import './index.css'
import Navbar from './customer/components/Navbar/Navbar'
import customeTheme from './Theme/customeTheme'
import Home from './customer/pages/Home/Home'
import Product from './customer/pages/Product/Product'
import ProductDetails from './customer/pages/PageDetails/ProductDetails'
import Review from './customer/pages/Review/Review'
import Cart from './customer/pages/Cart/Cart'
import Checkout from './customer/pages/Checkout/Checkout'
import Account from './customer/pages/Account/Account'
import { Route, Routes } from 'react-router-dom'
import BecomSeller from './customer/pages/BecomeSeller/BecomeSeller'


function App() {

  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Review/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Account/> */}

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products/:category' element={<Product/>} />
          <Route path='/reviews/:productId' element={<Product/>} />
          <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/account/*' element={<Account/>} />
          <Route path='/become-seller' element={<BecomSeller/>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App
