
import { ThemeProvider } from '@mui/material'
import './App.css'
import './index.css'
import Navbar from './customer/components/Navbar/Navbar'
import customeTheme from './Theme/customeTheme'
import Home from './customer/pages/Home/Home'


function App() {

  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App
