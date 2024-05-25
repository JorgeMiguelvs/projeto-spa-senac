

const Resultado = ({livros}) =>{
    if (livros.lenght===0) {
        return <p> Nenhum livro encontrado</p>
     }

    return (
        <div className="card-container">
          {livros.map((livro, index) => ( //map percorre item por item
            <div className="card" key={index}>
              <h1>{livro.titulo}</h1>
              <h1>{livro.autor}</h1>
              <img src={livro.imagem} />
              <h1>{livro.preco}</h1>
            </div>
          ))}
        </div>
        );
}

export default Resultado;