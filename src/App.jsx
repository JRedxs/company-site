import { ChakraProvider, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/Accueil';
import PageDiscover from './components/PageDiscover';
import PageUs from './components/PageUs';
import NotFound from './components/Notfound';
import Contact from './components/Contact';
function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Nav />

      <Box flexGrow={1}>
        <ChakraProvider>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/PageDiscover' element={<PageDiscover/>}/>
            <Route exact path='/PageUs' element={<PageUs/>}/>
            <Route exact path='*' element={<NotFound/>}/>
            <Route exact path='/Contact' element={<Contact/>}/>
          </Routes>
        </ChakraProvider>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
