import { Link } from 'react-router-dom';
import './index.scss';

function App() {
  return (
    <div className="App">
      <h1>
        home
      </h1>

      <Link to='/Media'> Calcular Média</Link>
      <Link to='/Alunoss'> Lista de chamada</Link>
      <Link to='/Correio'> CEP</Link>
      <Link to='/S'> Sorveteria</Link>

      <Link to='/Film'> filme </Link>

      <Link to='/pokedex'> Pokedex </Link>

    </div>
  );
}

export default App;
