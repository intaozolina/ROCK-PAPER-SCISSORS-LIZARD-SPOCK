import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import './App.scss';
import PokemonHomePage from './components/Pages/PokemonHomePage/PokemonHomePage';
import SinglePokemonPage from './components/Pages/SinglePokemonPage/SinglePokemonPage';
import Page404 from './components/Pages/Page404/Page404';
import Header from './components/Header/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" />} />
      <Route path="/pokemon" element={<PokemonHomePage />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/pokemon/:nameId" element={<SinglePokemonPage />} />
    </Routes>
  </BrowserRouter>
);
export default App;
