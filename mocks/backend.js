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

let pessoas =  [
  {
    id: uuidv4(),
    nome: 'Ana Clara Souza',
    cpf: 12345678901,
    email: 'ana.clara.souza@example.com',
    escola: 'Colégio Estadual de Ilhéus',
    endereco: 'Rua das Orquídeas, 123, Bairro Pontal',
    cidade: 'Ilhéus',
    cep: '45654010',
    estado: 'BA',
    pais: 'Brasil',
    telefone: '73988776655'
  },
  {
    id: uuidv4(),
    nome: 'João Pedro Martins',
    cpf: 98765432102,
    email: 'joao.martins@example.com',
    escola: 'Escola Municipal Heitor Dias',
    endereco: 'Avenida Dois de Julho, 789, Centro',
    cidade: 'Itabuna',
    cep: '45600002',
    estado: 'BA',
    pais: 'Brasil',
    telefone: '73999885544'
  },
  {
    id: uuidv4(),
    nome: 'Mariana Costa e Silva',
    cpf: 11122233344,
    email: 'mari.costa@example.com',
    escola: 'Universidade de São Paulo (USP)',
    endereco: 'Avenida Paulista, 1500',
    cnpj: '12345678000199',
    cidade: 'São Paulo',
    cep: '01310200',
    estado: 'SP',
    pais: 'Brasil',
    telefone: '11933445566'
  },
  {
    id: uuidv4(),
    nome: 'Maria Eduarda Ferreira',
    cpf: 45678912303,
    email: 'maria.e.ferreira@example.com',
    escola: 'Colégio da Polícia Militar - Dendezeiros',
    endereco: 'Rua da Paciência, 45, Rio Vermelho',
    cidade: 'Salvador',
    cep: '41950010',
    estado: 'BA',
    pais: 'Brasil',
    telefone: '71981234567'
  },
  {
    id: uuidv4(),
    nome: 'Pedro Almeida Gusmão',
    cpf: 22233344455,
    email: 'pedro.gusmao@example.com',
    escola: 'Instituto Federal da Bahia (IFBA)',
    endereco: 'Avenida Contorno, 345, Comércio',
    cnpj: '98765432000110',
    cidade: 'Salvador',
    cep: '40015010',
    estado: 'BA',
    pais: 'Brasil',
    telefone: '71987654321'
  },
  {
    id: uuidv4(),
    nome: 'Lucas Gabriel Costa',
    cpf: 32165498705,
    email: 'lucas.costa@example.com',
    escola: 'Universidade Estadual de Santa Cruz (UESC)',
    endereco: 'Rodovia Jorge Amado, km 16, Salobrinho',
    cidade: 'Ilhéus',
    cep: '45662900',
    estado: 'BA',
    pais: 'Brasil',
    telefone: '73991112233'
  },
  {
    id: uuidv4(),
    nome: 'Beatriz Lima',
    cpf: 65498732106,
    email: 'beatriz.lima.art@example.com',
    escola: 'Escola de Belas Artes da UFBA',
    endereco: 'Rua Araújo Pinho, 200, Canela',
    cidade: 'Salvador',
    cep: '40110150',
    estado: 'BA',
    pais: 'Brasil',
    telefone: '71988889900'
  },
  {
    id: uuidv4(),
    nome: 'Guilherme Andrade',
    cpf: 85274196307,
    email: 'gui.andrade@example.com',
    escola: 'SENAI Cimatec',
    endereco: 'Avenida Orlando Gomes, 1845, Piatã',
    cidade: 'Salvador',
    cep: '41650010',
    estado: 'BA',
    pais: 'Brasil',
    telefone: '71996554433'
  },
  {
    id: uuidv4(),
    nome: 'Isabela Rocha',
    cpf: 96325874108,
    email: 'isabela.rocha@example.com',
    escola: 'Instituto Federal da Bahia (IFBA)',
    endereco: 'Avenida Centenário, 500, Chame-Chame',
    cidade: 'Vitória da Conquista',
    cep: '45028015',
    estado: 'BA',
    pais: 'Brasil',
    telefone: '77988221144'
  },
  {
    id: uuidv4(),
    nome: 'Rafael Azevedo',
    cpf: 74185296309,
    email: 'rafael.azevedo@example.com',
    escola: 'Colégio Anísio Teixeira',
    endereco: 'Praça da Bandeira, 10, Centro',
    cidade: 'Jequié',
    cep: '45203902',
    estado: 'BA',
    pais: 'Brasil',
    telefone: '73999001212'
  },
  {
    id: uuidv4(),
    nome: 'Larissa Mendes Campos',
    cpf: 55544433322,
    email: 'larissa.m.campos@example.com',
    escola: 'Universidade Federal do Sul da Bahia (UFSB)',
    endereco: 'Avenida Beira Mar, 2500, Malhado',
    cidade: 'Ilhéus',
    cep: '45651500',
    estado: 'BA',
    pais: 'Brasil',
    telefone: '73981828384'
  },
  {
    id: uuidv4(),
    nome: 'Valentina Ribeiro Gomes',
    cpf: 66655544433,
    email: 'valentina.gomes@example.com',
    escola: 'Colégio Madre Maria Villac',
    endereco: 'Estrada do Arraial, 1250, Arraial d\'Ajuda',
    cidade: 'Porto Seguro',
    cep: '45816000',
    estado: 'BA',
    pais: 'Brasil',
    telefone: '73981122334'
  },
  {
    id: uuidv4(),
    nome: 'Davi Carvalho Pereira',
    cpf: 77766655544,
    email: 'davi.pereira@example.com',
    escola: 'Colégio Loyola',
    endereco: 'Rua Antônio de Albuquerque, 800, Savassi',
    cidade: 'Belo Horizonte',
    cep: '30112011',
    estado: 'MG',
    pais: 'Brasil',
    telefone: '31998877665'
  },
  {
    id: uuidv4(),
    nome: 'Sofia Oliveira Barbosa',
    cpf: 88877766655,
    email: 'sofia.barbosa@example.com',
    escola: 'Universidade Federal do Rio de Janeiro (UFRJ)',
    endereco: 'Avenida Atlântica, 1702, Copacabana',
    cidade: 'Rio de Janeiro',
    cep: '22021001',
    estado: 'RJ',
    pais: 'Brasil',
    telefone: '21987654321'
  }
];

let planos = [
  {
    "plano": "Plano de Melhoria da Escola",
    "objetivos": [
      {
        "selecionado": true,
        "nome": "Melhorar desempenho dos alunos",
        "problemas": [
          {
            "descricaoProblema": "Baixo rendimento em matemática",
            "resultado": "Melhoria das notas em 20%",
            "etapa": "Diagnóstico",
            "possuiCausa": "Sim",
            "prioridade": "Alta",
            "categoria": "Acadêmico"
          },
          {
            "descricaoProblema": "Falta de participação nas aulas",
            "resultado": "Aumento de 30% na participação",
            "etapa": "Planejamento",
            "possuiCausa": "Não",
            "prioridade": "Média",
            "categoria": "Comportamental"
          }
        ]
      },
      {
        "selecionado": true,
        "nome": "Aprimorar estrutura da escola",
        "problemas": [
          {
            "descricaoProblema": "Biblioteca com poucos livros atualizados",
            "resultado": "Atualização de 100 novos títulos",
            "etapa": "Execução",
            "possuiCausa": "Sim",
            "prioridade": "Alta",
            "categoria": "Infraestrutura"
          }
        ]
      },
      {
        "selecionado": false,
        "nome": "Ampliar atividades extracurriculares",
        "problemas": []
      }
    ]
  },
  {
  "plano": "Plano de Inclusão Digital",
    "objetivos": [
      {
        "selecionado": true,
        "nome": "Ampliar acesso a computadores e internet",
        "problemas": [
          {
            "descricaoProblema": "Poucos computadores disponíveis no laboratório",
            "resultado": "Aquisição de 20 novos computadores",
            "etapa": "Planejamento",
            "possuiCausa": "Sim",
            "prioridade": "Alta",
            "categoria": "Infraestrutura"
          },
          {
            "descricaoProblema": "Conexão de internet lenta",
            "resultado": "Instalação de fibra óptica de 200mb",
            "etapa": "Execução",
            "possuiCausa": "Sim",
            "prioridade": "Média",
            "categoria": "Tecnologia"
          }
        ]
      },
      {
        "selecionado": true,
        "nome": "Capacitar professores em ferramentas digitais",
        "problemas": [
          {
            "descricaoProblema": "Falta de domínio em plataformas de ensino online",
            "resultado": "Treinamento de 100% dos professores",
            "etapa": "Diagnóstico",
            "possuiCausa": "Sim",
            "prioridade": "Alta",
            "categoria": "Capacitação"
          }
        ]
      },
      {
        "selecionado": false,
        "nome": "Criar espaço maker na escola",
        "problemas": []
      }
    ]
  }

]

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

app.get('/planos', (req, res) => {
  res.json(planos);
});

app.post('/planos/cadastrar-plano', (req, res) => {
  const novoPlano = req.body;
  planos.push(novoPlano);
  res.status(201).json(planos);
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
