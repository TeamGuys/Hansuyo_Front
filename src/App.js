import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Footer from './components/Layout/Footer';

import "./App.css";
import Redirection from "./components/Redirection.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/LoginPages";
import Search from "./pages/SearchPages";

import Home from "./pages/Home/Home";
import Reels from "./pages/Reels/Reels";
import Upload from "./pages/Upload/Upload";
import Ranking from "./pages/Ranking/Ranking";
import Setting from "./pages/Setting/Setting";
import Edit from './pages/Setting/Edit';
import My from './pages/Setting/My.jsx';
import Profile from './pages/Setting/Profile.jsx';
import SubChannel from './pages/Setting/SubChannel.jsx';
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/redirect" element={<Redirection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reels/:videoId" element={<Reels />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/setting/edit" element={<Edit />} />
          <Route path="/setting/edit/my" element={<My />} />
          <Route path="/setting/edit/profile" element={<Profile />} />
          <Route path="/setting/edit/saveVideo" element={<Edit />} />
          <Route path="/setting/edit/deleteVideo" element={<Edit />} />
          <Route path="/setting/edit/subChannel" element={<SubChannel />} />


        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
