import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Media from './pages/media';
import App from './pages/home';
import Aluno from './pages/alunozinhos';
import Correio from './pages/corréia';
import Film from './pages/IMDB';
import Pokemon from './pages/poke';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App />} />
        <Route path='/Media' element={ <Media />} />
        <Route path='/Alunoss' element={ <Aluno/>} />
        <Route path='/Correio' element={ <Correio />} />

        <Route path='/Film' element={ <Film />} />

        <Route path='/pokedex' element={ <Pokemon />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
