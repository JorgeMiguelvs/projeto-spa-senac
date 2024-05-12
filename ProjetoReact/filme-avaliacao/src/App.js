import './App.css';
import { Route, Routes } from 'react-router-dom';
import CadastroFilme from './components/cadastroFilme/cadastroFilme';
import Pesquisa from './components/pesquisa/pesquisa';
import MaisBuscados from './components/maisBuscados/maisBuscados';
import Login from './components/login/login';
import CadastroUsuario from './components/cadastroUsuario/cadastroUsuario';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <header className="App-header">
              <Pesquisa />
            </header>
            <MaisBuscados />
          </>
        } />
        <Route path='/cadastroFilme' element={

          <CadastroFilme />

        } />
        <Route path='/cadastroUsuario' element={

          <CadastroUsuario />

        } />
        <Route path='/login' element={
          <Login />
        } />

      </Routes>
    </div>
  );
}

export default App;
