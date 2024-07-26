import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Reels from './pages/Reels/Reels';
import Upload from './pages/Upload/Upload';
import Ranking from './pages/Ranking/Ranking';
import Setting from './pages/Setting/Setting';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
