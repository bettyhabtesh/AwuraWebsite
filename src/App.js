
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Vacancy from './Components/Vacancy';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacancy" element={<Vacancy />} />
      </Routes>
    </Router>
  );
};

export default App;
