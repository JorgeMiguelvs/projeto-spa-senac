// fs biblioteca oara ler livros
const fs = require('fs');
// crio uma const que recebe todos os livros do arquivo livros.json
const meuLivros = fs.readFileSync('livros.json','utf-8');
//criamos uma função que retorna os livros contidos na constante meusLivros 
//e exporto para que ela fique disponivel no projeto
exports.buscarLivros = () => {
    return JSON.parse(meuLivros);
}

exports.buscarPorTitulo = (titulo) =>{
    const livros = JSON.parse(meuLivros);
    return livros.find(livro => livro.titulo.toLowerCase().includes(titulo.toLowerCase()) );
}