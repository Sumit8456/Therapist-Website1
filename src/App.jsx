import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OperationDashboard from './pages/OperationDashboard';
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
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/operation" element={<OperationDashboard />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
