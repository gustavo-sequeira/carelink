// bibliotecas
import { BrowserRouter } from 'react-router-dom';
// components
import Rotas from './rotas';
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
