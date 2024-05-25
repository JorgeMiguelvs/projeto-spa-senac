import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Resultado = ({ livros }) => {
  if (livros.lenght === 0) {
    return <p> Nenhum livro encontrado</p>
  }


  return (
    <div className="card-container">
      {livros.map((livro, index) => ( //map percorre item por item
        <div className="card" key={index}>
          <h1>{livro.titulo}</h1>
          <img src={livro.imagem} alt={livro.titulo} />
          <h1>Categoria: {livro.categoria}</h1>
          <h1>Ano: {livro.ano}</h1>
          <h1>Categoria:{livro.categoria}</h1>
          <h1>Duração: {livro.duracao}</h1>
          <h1><Button variant="secondary" href={livro.trailer} target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px', padding: '4px 6px', width: '100px' }}>Ver Trailer</Button></h1>
        </div>
      ))}
    </div>
  );
}

export default Resultado;