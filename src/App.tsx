import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './lib/pages/Home';
import Contact from './lib/pages/Contact';


export const App: React.FC = () => {

  return (
    <div className="app-container relative">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contact/:id" element={ <Contact /> } />
      </Routes>

    </div>
  );
};

