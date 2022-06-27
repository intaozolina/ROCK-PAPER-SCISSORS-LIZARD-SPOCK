import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.scss';
import Page404 from './components/Pages/Page404/Page404';
import Header from './components/Header/Header';
import HomePage from './components/Pages/HomePage/HomePage';
import GamePage from './components/Pages/GamePage/GamePage';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  </BrowserRouter>
);
export default App;
