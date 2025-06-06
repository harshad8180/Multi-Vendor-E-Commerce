
import { ThemeProvider } from '@mui/material'
import './App.css'
import Navbar from './customer/components/Navbar/Navbar'
import customeTheme from './Theme/customeTheme'


function App() {

  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App
