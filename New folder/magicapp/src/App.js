import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import MagicBall from './components/Pages/MagicBall'; // Default import
import MagicSpell from './components/Pages/MagicSpell'; // Default import
import MagicWand from './components/Pages/MagicWand'; // Default import
import Contact from './components/Pages/Contact'; // Default import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/magicball" element={<MagicBall />} />
        <Route path="/magicspell" element={<MagicSpell />} />
        <Route path="/magicwand" element={<MagicWand />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
