import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie,index) => (
        <div key={index}>
          <h2>Movie: {movie.title}</h2>
          <h4>Time: {movie.time}</h4>
          <h4>Genres:</h4>
          <h4>Metascore: {movie.metascore}</h4>
          <ul>
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}

          </ul>
          

      

        </div>

      ))}
    </div>
  );
};

export default Movies;

// return (
//   <div>
//     <h1>Actors Page</h1>
//     {actors.map((actor,index) => (
//       <div key={index}>
//         <h2>Name: {actor.name}</h2>
//         <h3>Movies:</h3>
//         <ul>
//           {actor.movies.map((movie,index) => (
//             <li key={index}>{movie}</li>
//           ))}

//         </ul>

//       </div>
//     ))}
//   </div>
// );