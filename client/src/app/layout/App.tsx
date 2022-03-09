import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../../features/about/AboutPage';
import Catelog from '../../features/catelog/Catelog';
import ProductDetail from '../../features/catelog/ProductDetail';
import ContactPage from '../../features/contact/ContactPage';
import HomePage from '../../features/home/HomePage';
import Header from './Header';

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
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catelog' element={<Catelog />} />
          <Route path='/catelog/:id' element={<ProductDetail />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
