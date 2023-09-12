import React from 'react';

const Index = ({ pokemon }) => {
  return (
    <div>
      <h1>See All The Pokemon!</h1>
      <ul>
        {pokemon.map((p) => (
          <li key={p._id}>
            <a href={`/pokemon/${p._id}`}>{p.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;


