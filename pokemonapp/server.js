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

const Pokemon = require('./models/Pokemon');

app.get('/pokemon', async (req, res) => {
  try {
    const pokemonList = await Pokemon.find({});
    res.json(pokemonList);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/pokemon/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const selectedPokemon = await Pokemon.findById(id);
    
    if (!selectedPokemon) {
      return res.status(404).send('Pokemon not found');
    }

    res.json(selectedPokemon);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
    
app.post('/pokemon', async (req, res) => {
  try {
    const { name, img } = req.body;
    const newPokemon = new Pokemon({ name, img });
    await newPokemon.save();
    res.redirect('/pokemon');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/pokemon/new', (req, res) => {
  res.render('New');
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

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adhudsond:WroQGBFl11ZC6ZnS@cluster0.8n1kphs.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

