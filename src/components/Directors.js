import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h2>Director: {director.name}</h2>
          <h2>Movies:</h2>
          <ul> 

          {director.movies.map((movie, index) => (
            <li key={index}>
              <p>{movie}</p>
            </li>
          ))}

          </ul>

        </div>
      ))}
    </div>
  );
}

export default Directors
