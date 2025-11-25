import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Projects />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
