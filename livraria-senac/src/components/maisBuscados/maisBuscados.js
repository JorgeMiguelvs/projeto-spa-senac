import { useEffect, useState } from "react";
import "./stylesCard.css";

const MaisBuscados = () => {
    const [livros, setLivros] = useState([]);
  
    useEffect(() => {
      const buscarLivros = async () => {
        try {
          const resposta = await fetch("http://localhost:8080/livros");
          const dados = await resposta.json();
          console.log(dados);
          setLivros(dados);
        } catch (error) {
          console.error(error);
        }
      };
      buscarLivros();
    }, []);
  
    return (
      <div className="card-container">
        {livros.map((livro, index) => (
          <div className="card" key={index}>
            <h1>{livro.titulo}</h1>
            <h1>{livro.autor}</h1>
            <img src={livro.imagem} alt={livro.titulo} />
            <h1>{livro.preco}</h1>
          </div>
        ))}
      </div>
    );
  };
  
  export default MaisBuscados;