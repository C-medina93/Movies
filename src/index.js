
import ReactDOM from 'react-dom/client';
import React, { useState, useEffect} from 'react';
import axios from 'axios';

const App = ()=> {
  const [movie,setMovie]= useState([]);
  useEffect(()=>{
    const fetchMovies = async()=>{
      const response = await axios.get('api/movies');
       setMovie(response.data);
    }
    fetchMovies();
  },[]);


  return (
    <div>
    <h1>Movies ({movie.length})</h1>

    <ul>
      {
        movie.map(movie =>{
          return(
            <li key = {movie.id }>{movie.title}</li>
          );
        })
      }
    </ul>

    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
