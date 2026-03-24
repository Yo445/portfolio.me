import Home from '@pages/Home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Contact from '@pages/Contact/Contact';
import Navbar from '@components/Navbar/Navbar';
import { ThemeProvider } from './context/ThemeContext';

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
