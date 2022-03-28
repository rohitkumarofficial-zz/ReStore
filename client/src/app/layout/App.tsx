import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AboutPage from '../../features/about/AboutPage';
import Catelog from '../../features/catelog/Catelog';
import ProductDetail from '../../features/catelog/ProductDetail';
import ContactPage from '../../features/contact/ContactPage';
import HomePage from '../../features/home/HomePage';
import Header from './Header';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from '../errors/NotFound';

function App () {

  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#202124f5'
      }
    }
  })

  function handleThemeChange () {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catelog' element={<Catelog />} />
          <Route path='/catelog/:id' element={<ProductDetail />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
