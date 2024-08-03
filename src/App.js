import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Reels from './pages/Reels/Reels';
import Upload from './pages/Upload/Upload';
import Ranking from './pages/Ranking/Ranking';
import Setting from './pages/Setting/Setting';
import Footer from './components/Layout/Footer';
import Board from './pages/Reels/Reels';


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:videoId" element={<Board />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reels/:videoId" element={<Reels />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
