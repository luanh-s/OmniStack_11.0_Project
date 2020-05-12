// UTILIZANDO O APLICATIVO EXPRESS PARA IMPORTAR ALGUMAS FUNCIONALIDADES
const express = require('express');

const cors = require('cors');

// CONST ROUTES PARA IMPORTAR AS ROTAS. SEMPRE INSERIR O './' ANTES, 
// PARA O REQUIRE ENTENDER QUE É UM ARQUIVO, NÃO UM PACOTE.
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);