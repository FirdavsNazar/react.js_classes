 import React from 'react'
 import './movie-list.css'
import MovieListItem from '../Movie-list-item/movie-list-item'
 
 const MovieList = () => {
   return (
     <div className='movie-list'>
        <MovieListItem name = "Abdulloh"  viewer={675}/>
        <MovieListItem name = "Sen Yetim Emassan"  viewer={1275}/>
        <MovieListItem name = "Ey ko'ngil"  viewer={7870}/>
     </div>
   )
 }
  
 export default MovieList