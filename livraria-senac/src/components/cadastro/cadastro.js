import './stylesCadastro.css';
import React,{useState} from 'react';

const Cadastro = () =>{
const  [formData, setFormData] = useState({name:'',password:''});
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
      setFormData({name:'',password:''})

  } catch (error) {
    console.error(error)
    setFeedBack({message:"Falha ao cadastrar", type:"erro"})
  }
}
    return(
      <>
    <div class="container">
    <form id="cadastro-form" onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      <div class="form-group">
        <label for="senha">Nome:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
      </div>
      <div class="form-group">
        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="password" value={formData.password} onChange={handleChange}/>
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
  </>
    );
    
}

export default Cadastro;