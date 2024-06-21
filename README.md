
# Documentação do Projeto Final: Aplicação Web com Contêineres e Ansible

## 1. Introdução

### Objetivo do Projeto
Este projeto visa desenvolver uma aplicação web simples utilizando arquitetura de microserviços com contêineres para cada componente e automação do deployment usando Ansible. O projeto foi desenvolvido e testado utilizando o ambiente de laboratório da Red Hat para Ansible, garantindo a aplicação de boas práticas e eficiência.

### Escopo do Projeto
O sistema é composto por três componentes principais, todos contêinerizados:
- **Frontend**: Uma interface de usuário construída com Express e servida por um servidor web.
- **Backend**: Uma API REST em Node.js que interage com um banco de dados PostgreSQL.
- **Banco de Dados**: PostgreSQL gerenciado em um contêiner separado.

## 2. Requisitos do Sistema

### Hardware e Software
- **Hardware**: Computador com pelo menos 4GB de RAM e 20GB de espaço disponível em disco.
- **Software**: Podman (versão mais recente), Ansible (versão 2.9 ou superior), Node.js (versão 14.x ou superior).

### Dependências
- **Node.js**: Bibliotecas como Express, Axios e o módulo `pg` para PostgreSQL.

## 3. Configuração e Deploy dos Contêineres

### Backend
A aplicação backend é uma API REST desenvolvida em Node.js, que se comunica com o banco de dados PostgreSQL para obter dados.

**Código do Backend (app.js):**
```javascript
const express = require('express');
const app = express();
const { Pool } = require('pg');
const pool = new Pool({
  user: 'myuser',
  host: 'database',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432
});

app.get('/data', async (req, res) => {
  const result = await pool.query('SELECT dado FROM dados');
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log('Backend running on port 3000');
});
```

### Frontend
A aplicação frontend interage com o backend para receber e exibir dados, operando na porta 80.

**Código do Frontend (app.js):**
```javascript
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://10.0.2.3:3000/data');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from backend');
  }
});

app.listen(80, () => {
  console.log('Frontend running on port 80');
});
```

## 4. Funcionamento do Playbook

O playbook Ansible é configurado para gerenciar o deployment e a configuração de cada componente de forma automatizada, garantindo a consistência entre os ambientes de desenvolvimento e produção.

## 5. Conclusão

Este projeto exemplifica a eficiência da utilização de contêineres e automação via Ansible no desenvolvimento de aplicações web, permitindo escalabilidade e facilidade na manutenção.

## 6. Apêndices

### Ambiente de Desenvolvimento
Utilizei o lab Red Hat de Ansible como nosso ambiente de desenvolvimento principal para este projeto.
