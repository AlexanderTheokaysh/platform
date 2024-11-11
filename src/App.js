import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Choose from './components/choose/choose';
import WebTrader from './components/webTrader/webTrader';
import MyProfile from './components/myProfile/myProfile';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Choose />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/webtrader" element={<WebTrader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
