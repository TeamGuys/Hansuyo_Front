import "./App.css";
import React from "react";
import Redirection from "./components/Redirection.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/LoginPages";
import Search from "./pages/SearchPages";

import Home from "./pages/Home/Home";
import Reels from "./pages/Reels/Reels";
import Upload from "./pages/Upload/Upload";
import Ranking from "./pages/Ranking/Ranking";
import Setting from "./pages/Setting/Setting";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/redirect" element={<Redirection />} />
      </Routes>
    </Router>
  );
};

export default App;
