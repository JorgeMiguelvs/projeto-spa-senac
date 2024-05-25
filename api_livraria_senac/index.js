//chamando o pacote que eu instalei para dentro do meu arquivo para usar
const express = require("express");

//importamos os livros que estão na outra pasta services
const livrosImportados = require('./services/livroServices');

const usersServices = require('./services/usersServices'); //npm i body-parser instalamos para receber no corpo do json

const body = require('body-parser');//importar

const cors = require('cors');


//cria um obj app para receber todas as funçoes do express
const app = express();
app.use(cors());

app.use(body.json());
//callbCK 2 objetos
app.get('/filmes', (req, res) => {
    res.status(200).json(livrosImportados.buscarLivros());
});

app.get('/buscarFilmesPorTitulo/:titulo', (req, res) => {

    //extrai o titulo que enviado pela url pelo usuario
    const { titulo } = req.params;
    //chamo a função do serviço e passo o titulo extraido
    const resultado = livrosImportados.buscarPorTitulo(titulo);

    if (resultado) {
        res.status(200).send(resultado)
    } else {
        res.status(400).send('recurso não foi encontrado');
    }

});

//rota de login
app.post('/login', async (req, res) => {
    //estração das variaveis que estão sendo passadas
    const { email, password } = req.body;

    const resul = await usersServices.validadeLogin(email, password);

    if (resul) {
        res.status(200).json({ sucess: true })
    } else {
        res.status(401).json('Dados')
    }
})

app.post('/cadastro', (req, res) => {
    //extrair os dados do corpo da requisilçao
    const { name, email, password } = req.body;

    if (name && email && password) {

        usersServices.addUser(name, email, password);
        res.status(200).send("User Add")

    }
    else {
        res.status(400).send("Dados Invalidos")
    }
})

app.listen(8080)

