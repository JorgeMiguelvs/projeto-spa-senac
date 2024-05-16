import { useState } from "react";
import "./styles.css";
import Resultado from "./resultado";


const Pesquisa = () =>{
    const [TermoBusca,setTermoBusca] = useState('');
    const [livros, setLivros] = useState([]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        try {
             // busco os dados na api com base no valor que é passado para o termpBusca
             const response = await fetch(`http://localhost:8080/buscarLivrosPorTitulo/${TermoBusca}`)
             //converto esses dados para um formato compatível
             const data = await response.json();
             //insiro esses dados dentro da função que manipula os livros
             setLivros([data]);
            
        } catch (error) {
            alert('Nao foi encontrado', error);

        }
    }

    return(
        <div className="card-container-titulo">
            <h1>Encontre um filme desejado</h1>
            <br/>
            <h1>Explore por títulos</h1>
            <br/>
            <input className="input" placeholder="Digite algum Filme ou Título,...."
            value={TermoBusca}
            onChange={(e)=> setTermoBusca(e.target.value)}
            />
            <button className="button" onClick={handleSubmit}>Pesquisar</button>
        <Resultado livros={livros}/>

        </div>
    )

}

export default Pesquisa;