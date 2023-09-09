import React from 'react';

const Index = ({ pokemon }) => {
  return (
    <div>
      <h1>See All The Pokemon!</h1>
      <ul>
      {pokemon.map((p, index) => (
  <li key={index}>
    <a href={`/pokemon/${index}`}>{p.name}</a>
  </li>
))}
      </ul>
    </div>
  );
};

export default Index;
