const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// "Banco de dados" mockado
const users = [
  { id: 1, email: 'teste@teste.com', password: '123456' },
  { id: 2, email: 'evelyn@teste.com', password: 'senha' }
];

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

// Só pra testar se o servidor está rodando
app.get('/', (req, res) => {
  res.send('API rodando 🚀');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
