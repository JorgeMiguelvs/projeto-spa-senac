import { useState, useEffect } from "react";
import "./stylesCard.css";

const MaisBuscados = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const buscarFilmes = async () => {
            try {
                const resposta = await fetch("http://localhost:8080/filmes");
                const dados = await resposta.json();
                console.log(dados);
                setFilmes(dados);
            } catch (error) {
                console.error(error);
            }
        };
        buscarFilmes();
    }, []);

    return (
        <div className="card-container">
            {filmes.map((filmes, index) => (
                <div className="card" key={index}>
                    <h1>{filmes.titulo}</h1>
                    <h1>{filmes.genero}</h1>
                    <h1>{filmes.ano}</h1>
                    <h1>{filmes.categoria}</h1>
                    <h1>{filmes.duracao}</h1>
                    <h1>{filmes.descricao}</h1>
                    <img src={filmes.imagem} alt={filmes.titulo} />

                </div>
            ))}
        </div>
    );
}

export default MaisBuscados;