const express = require('express');
const app = express();
const port = 3000;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Index = require('./views/Index');

app.get('/pokemon', (req, res) => {
  const indexHtml = ReactDOMServer.renderToString(
    <Index pokemon={pokemon} />
  );
  res.send(indexHtml);
});

const pokemon = require('./models/pokemon');

app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const selectedPokemon = pokemon[id];
  
    const showHtml = ReactDOMServer.renderToString(
      <Show pokemon={selectedPokemon} />
    );
  
    res.send(showHtml);
  });
    

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
  res.json(pokemon);
});


