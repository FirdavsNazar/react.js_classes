 import React from 'react'
 import './movie-list.css'
import MovieListItem from '../Movie-list-item/movie-list-item'
 
 const MovieList = ({data}) => {
   return (
     <div className='movie-list'>

      {data.map(item => (
        // <MovieListItem name = {item.name}  viewer={item.viewer} favourite={item.favourite}/>
        <MovieListItem {...item}/>
      ))}
             
     </div>
   )
 }
  
 export default MovieList