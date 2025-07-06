import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page from './app/page';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
         <Route path="/faq" element={<FAQ/>} />
         <Route path="/contact" element={<ContactForm/>} />
     
      </Routes>
    </Router>
  );
};

export default App;
