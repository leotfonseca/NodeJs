const express = require('express');

const server = express();

const users = ['Rubens', 'Matheus', 'Marina'];

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json({message : `Exibindo o índice ${index} ` + users[index]});
})

server.listen(3000)