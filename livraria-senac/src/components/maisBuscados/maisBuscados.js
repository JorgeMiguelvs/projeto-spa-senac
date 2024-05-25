import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./stylesCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const MaisBuscados = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const buscarLivros = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/filmes");
        const dados = await resposta.json();
        console.log(dados);
        setLivros(dados.map(livro => ({ ...livro, show: false }))); // Adicionando a propriedade show para cada livro
      } catch (error) {
        console.error(error);
      }
    };
    buscarLivros();
  }, []);

  const toggleModal = (index) => {
    setLivros(prevLivros => {
      const updatedLivros = [...prevLivros];
      updatedLivros[index].show = !updatedLivros[index].show; // Alternando o valor de show para o livro específico
      return updatedLivros;
    });
  };

  return (
    <div className="card-container">
      {livros.map((livro, index) => (
        <div className="card" key={index}>
          <h1>{livro.titulo}</h1>
          <img src={livro.imagem} alt={livro.titulo} />
          <h1>Categoria: {livro.categoria}</h1>
          <h1>Ano: {livro.ano}</h1>
          <h1>Categoria:{livro.categoria}</h1>
          <h1>Duração: {livro.duracao}</h1>
          <h1>
            <Button variant="primary" onClick={() => toggleModal(index)} style={{ fontSize: '16px', padding: '4px 6px', width: '100px' }}>
              Descrição
            </Button>
            <Modal
              show={livro.show}
              onHide={() => toggleModal(index)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  {livro.titulo}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  {livro.descricao}
                </p>
              </Modal.Body>
            </Modal>
          </h1>
          <h1><Button variant="secondary" href={livro.trailer} target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px', padding: '4px 6px', width: '100px' }}>Ver Trailer</Button></h1>
        </div>
      ))}
    </div>
  );
};

export default MaisBuscados;
