import React, { useState } from 'react';
const CadastroFilme = () => {
  
    const  [formData, setFormData] = useState({titulo:'',genero:'', ano:'',categoria:'',duracao:'',descricao:'',url:''});
    const  [FeedBack,setFeedBack]= useState({message:'',type:''});

    const handleChange= (e)=>{
      const {titulo, value} = e.target;
      setFormData (prevState => ({...prevState,[titulo]: value}))
      
      }

    const handleSubmitForm = async (e) =>{
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
          setFormData({titulo:'',genero:'', ano:'',categoria:'',duracao:'',descricao:'',url:''})
    
      } catch (error) {
        console.error(error)
        setFeedBack({message:"Falha ao cadastrar", type:"erro"})
      }
    }

    return (
        <div className="movie-container">
      <form className="movie-form" onSubmit={handleSubmitForm}>
        <h2>Cadastro de Filme</h2>
        <div className="form-group">
          <label htmlFor="title">Nome:</label>
          <input
            type="text"
            id="title" name="title" value={formData.title} onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Genero:</label>
          <input
            type="text"
            id="genero"
            name='genero'
            value={formData.genero}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ano">Ano:</label>
          <input
            type="number"
            id="ano"
            value={formData.ano}
            onChange={handleChange}
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoria:</label>
          <input
            type="text"
            id="categoria"
            value={formData.categoria}
            onChange={handleChange}
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="duracao">Duração:</label>
          <input
            type="text"
            id="duracao"
            value={formData.duracao}
            onChange={handleChange}
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            value={formData.descricao}
            onChange={handleChange}
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">urlm URL:</label>
          <input
            type="text"
            id="url"
            value={formData.url}
            onChange={handleChange}
           
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

export default CadastroFilme;