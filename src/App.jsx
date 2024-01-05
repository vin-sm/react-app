import React from 'react';
import NavBar from './NavBar'
import LeftMenu from './LeftMenu';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from './DetailsPage';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div style={{ display: 'flex' }}>
          <LeftMenu />
          <Routes>
            <Route path="/" exact element={<HomePage />}  />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

