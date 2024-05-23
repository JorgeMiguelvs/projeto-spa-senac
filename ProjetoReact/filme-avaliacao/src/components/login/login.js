
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
   //gerenciador de estado
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] =  useState('');

  //consrante para fazer a navegaçãp

  const navigate = useNavigate();

  //constante porque essa função na memória do computador não vai ser alterada
  const handleLogin = async () => {
      //armazena os dados
                      //promise = feita , cumprida e pendente
      
          // try catch tenta acessar e pega o erro quase de problema

          try {
              const response = await fetch('http://localhost:8080/login',{
                  method:'POST',
                  headers:{
                          'Content-Type':'application/json', 
                  },
                  body:JSON.stringify({email,password})
              });


              //verifica  a resposta
              if(response.ok){
                  navigate('/')
              }else{
                  setError('Dados inexistentes')
              }
          } catch (error) {
              console.error(error)
          }
  }
    return (
      <div class="container">
      <h2>Tela de Login</h2>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email"
            value={email}
            onChange={(e) => setEmail (e.target.value)}
            placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label for="senha">Senha:</label>
            <input type="password" id="senha" name="senha"
            value={password}
            onChange={(e) => setPassword (e.target.value)}
            placeholder="Senha"
            />
          </div>
        <button onClick={handleLogin}>Entrar</button>
        {error && <p>{error}</p>}
    </div>
    );
}

export default Login;