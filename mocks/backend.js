const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// "Banco de dados" mockado
let users = [
  { id: 1, email: 'teste@teste.com', password: '123456' },
  { id: 2, email: 'evelyn@teste.com', password: 'senha' }
];

let pessoas = [
  {
    id: uuidv4(),
    nome: 'Bamboo Watch',
    cpf: 12345678900,
    email: 'cliente1@email.com',
    escola: 'Escola A',
    endereco: 'Rua 1, Cidade X'
  },
  {
    id: uuidv4(),
    nome: 'Black Watch',
    cpf: 98765432100,
    email: 'cliente2@email.com',
    escola: 'Escola B',
    endereco: 'Rua 2, Cidade Y'
  },
  {
    id: uuidv4(),
    nome: 'Blue Band',
    cpf: 45678912300,
    email: 'cliente3@email.com',
    escola: 'Escola C',
    endereco: 'Rua 3, Cidade Z'
  },
  {
    id: uuidv4(),
    nome: 'Blue T-Shirt',
    cpf: 78912345600,
    email: 'cliente4@email.com',
    escola: 'Escola D',
    endereco: 'Rua 4, Cidade W'
  },
  {
    id: uuidv4(),
    nome: 'Bracelet',
    cpf: 32165498700,
    email: 'cliente5@email.com',
    escola: 'Escola E',
    endereco: 'Rua 5, Cidade V'
  },
  {
    id: uuidv4(),
    nome: 'Red Shoes',
    cpf: 65498732100,
    email: 'cliente6@email.com',
    escola: 'Escola F',
    endereco: 'Rua 6, Cidade U'
  },
  {
    id: uuidv4(),
    nome: 'Green Hat',
    cpf: 85274196300,
    email: 'cliente7@email.com',
    escola: 'Escola G',
    endereco: 'Rua 7, Cidade T'
  },
  {
    id: uuidv4(),
    nome: 'Silver Ring',
    cpf: 96325874100,
    email: 'cliente8@email.com',
    escola: 'Escola H',
    endereco: 'Rua 8, Cidade S'
  },
  {
    id: uuidv4(),
    nome: 'Golden Necklace',
    cpf: 74185296300,
    email: 'cliente9@email.com',
    escola: 'Escola I',
    endereco: 'Rua 9, Cidade R'
  },
  {
    id: uuidv4(),
    nome: 'Leather Jacket',
    cpf: 15975348600,
    email: 'cliente10@email.com',
    escola: 'Escola J',
    endereco: 'Rua 10, Cidade Q'
  },
  {
    id: uuidv4(),
    nome: 'White Shirt',
    cpf: 35715948600,
    email: 'cliente11@email.com',
    escola: 'Escola K',
    endereco: 'Rua 11, Cidade P'
  },
  {
    id: uuidv4(),
    nome: 'Blue Jeans',
    cpf: 25896314700,
    email: 'cliente12@email.com',
    escola: 'Escola L',
    endereco: 'Rua 12, Cidade O'
  },
  {
    id: uuidv4(),
    nome: 'Sports Cap',
    cpf: 14725836900,
    email: 'cliente13@email.com',
    escola: 'Escola M',
    endereco: 'Rua 13, Cidade N'
  },
  {
    id: uuidv4(),
    nome: 'Running Shoes',
    cpf: 36925814700,
    email: 'cliente14@email.com',
    escola: 'Escola N',
    endereco: 'Rua 14, Cidade M'
  },
  {
    id: uuidv4(),
    nome: 'Winter Coat',
    cpf: 95175385200,
    email: 'cliente15@email.com',
    escola: 'Escola O',
    endereco: 'Rua 15, Cidade L'
  }
];

const agenda=[];

// Rota de login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({
      success: true,
      token: 'fake-jwt-token',
      user: { id: user.id, email: user.email }
    });
  } else {
    res.status(401).json({ success: false, message: 'Credenciais inválidas' });
  }
});

app.get('/', (req, res) => {
  res.send('API rodando 🚀');
});

app.get('/pessoas', (req, res) => {
  res.json(pessoas);
});

app.put('/pessoas/:id', (req, res) => {
  const id = req.params.id;
  const updatedPessoa = req.body;

  const index = pessoas.findIndex(p => p.id === id);
  if (index !== -1) {
    pessoas[index] = { ...pessoas[index], ...updatedPessoa };
    res.json(pessoas[index]);
  } else {
    res.status(404).json({ message: 'Pessoa não encontrada' });
  }
});

app.post('/pessoas/cadastrar-pessoa', (req, res) => {
  const novaPessoa = req.body;
  pessoas.push(novaPessoa);
  res.status(201).json(pessoas);
});

app.delete('/pessoas/:id', (req, res) => {
  const id = req.params.id;

  const pessoaExistente = pessoas.find(p => p.id === id);
  if (!pessoaExistente) {
    return res.status(404).json({ message: 'Pessoa não encontrada' });
  }

  pessoas = pessoas.filter(p => p.id !== id);

  res.json(pessoas);
});



app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
