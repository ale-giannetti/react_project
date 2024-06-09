import Landing from "components/Landing";
import CardPages from "components/pages/CardPages/CardPages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/card-pages" element={<CardPages />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
