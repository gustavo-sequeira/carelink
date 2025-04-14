import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './rotas';


import './App.css';

function App() {
  return (

    <BrowserRouter>
      <Rotas />
    </BrowserRouter>

  );
}

export default App;
