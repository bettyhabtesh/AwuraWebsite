/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Vacancy from "./Components/Vacancy";
import theme from "./theme";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  img {
    ${theme.images.transparentBackground}
    ${theme.images.mixBlendMode}
  }
`;
const App = () => {
  return (
    <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/vacancy" element={<Vacancy />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
