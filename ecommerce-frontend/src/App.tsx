
import { ThemeProvider } from '@mui/material'
import './App.css'
import './index.css'
import Navbar from './customer/components/Navbar/Navbar'
import customeTheme from './Theme/customeTheme'
import Home from './customer/pages/Home/Home'
import Product from './customer/pages/Product/Product'


function App() {

  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        {/* <Home /> */}
        <Product/>
      </div>
    </ThemeProvider>
  );
}

export default App
