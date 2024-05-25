
import { Route, Routes } from 'react-router-dom';

import './App.css';
import MaisBuscados from './components/maisBuscados/maisBuscados';
import MenuBar from './components/navbar/Menu';
import Pesquisa from './components/pesquisa/pesquisa';
import Cadastro from './components/cadastro/cadastro';
import Login from './components/login/login';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path ='/' element={
          <>
            <header className="App-header">
            <Pesquisa/>
            </header>
            <MaisBuscados/>
          </>
        }/>
        <Route path='/home' element={
          
            <Home/>
          
        }/>
        <Route path='/login' element={
          <Login/>
        }/>
      </Routes>
    </div>
  );
}

export default App;

