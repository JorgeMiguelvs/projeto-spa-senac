const fs = require('fs');

const meusFilmes = fs.readFileSync('filmes.json','utf-8');

exports.buscarFilmes = () => {
    return JSON.parse(meusFilmes);
}

exports.buscarPorTitulo = (titulo) =>{
    const filmes = JSON.parse(meusFilmes);
    return filmes.find(filme => filme.titulo.toLowerCase().includes(titulo.toLowerCase()) );
}