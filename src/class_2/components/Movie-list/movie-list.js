 import React from 'react'
 import './movie-list.css'
import MovieListItem from '../Movie-list-item/movie-list-item'
 
 const MovieList = () => {
   return (
     <div className='movie-list'>
        <MovieListItem/>
        <MovieListItem/>
        <MovieListItem/>
     </div>
   )
 }
  
 export default MovieList