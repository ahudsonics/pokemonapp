import React from 'react';

const New = () => {
  return (
    <div>
      <h1>Create a New Pokemon</h1>
      <form action="/pokemon" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required /><br />
        <label htmlFor="img">Image URL:</label>
        <input type="text" id="img" name="img" required /><br />
        <button type="submit">Create Pokemon</button>
      </form>
    </div>
  );
};

export default New;
