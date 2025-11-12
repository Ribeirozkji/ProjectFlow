
const http = require('http');
const fs = require('fs');
const path = require('path');


const caminhoHtml = path.join(__dirname, 'index.html');


let projetos = [
  {
    id: 1,
    nome: "Projeto Exemplo - ProjectFlow",
    tarefas: [
      { id: 1, titulo: "Definir escopo", prioridade: "Alta", prazo: "2025-11-15", concluida: false },
      { id: 2, titulo: "Criar protótipo", prioridade: "Média", prazo: "2025-11-20", concluida: true }
    ]
  }
];


const servidor = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    
    fs.readFile(caminhoHtml, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erro ao carregar a página.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/api/projetos') {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(projetos));
  } else {
   
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada.');
  }
});


const PORT = 3000;
servidor.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
