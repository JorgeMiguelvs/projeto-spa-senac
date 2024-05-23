import React, { useState } from 'react';
import "./cadastroUsuario.css";

const CadastroUsuario = () => {
  const  [formData, setFormData] = useState({name:'',email:'',password:''});
  const  [FeedBack,setFeedBack]= useState({message:'',type:''});
  
    const handleChange= (e)=>{
      const {name, value} = e.target;
      setFormData (prevState => ({...prevState,[name]: value}))
      
      }
      const handleSubmit = async (e) =>{
        e.preventDefault(); //prevenir comportamentos padrões do formulário
        try {
          const response = await fetch('http://localhost:8080/cadastro',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
          if (response.ok) {
            setFeedBack({message:'Cadastrado', type:'sucesso'})
          }else{
            const erro = await response.json()
            setFeedBack({message:erro.message, type:'error'})
          }
            setFormData({name:'',password:'',email:''})
      
        } catch (error) {
          console.error(error)
          setFeedBack({message:"Falha ao cadastrar", type:"erro"})
        }
      }
      
      
    
    return (
        <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Cadastro de Usuário</h2>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name" name="name" value={formData.name} onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="senha" name="password" value={formData.password} onChange={handleChange}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {
        FeedBack.message && (
          <div className={FeedBack.type}>
              {FeedBack.message}
          </div>
        )
      }
    </div>
    );
}

export default CadastroUsuario;