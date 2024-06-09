
import Landing from "components/Landing";
import CardPages from "components/pages/CardPages/CardPages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";



const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/card-pages" element={<CardPages />} />
    </Routes>
  </Router>
  );
};

export default App;
