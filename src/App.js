import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Hamburger from './components/Hamburger';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    ochre: {
      main: '#000000',
      light: '#ffffff',
      dark: '#4e4e4e',
      contrastText: '#ffffff',
    },
  },
});

function App() {
  const [isOpen, setOpen] = useState(false);
  const open = () => {
    setOpen(!isOpen);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {isOpen && <Hamburger />}
        <Navbar open={open} isOpen={isOpen} />
        <Main />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
