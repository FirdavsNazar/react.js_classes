 import React from 'react'
 import './movie-list.css'
 import MovieListItem from '../Movie-list-item/movie-list-item'
 
 const MovieList = ({data, onDelete}) => {
   return (
     <div className='movie-list'>

      {data.map(item => (
        <MovieListItem key={item.id} name = {item.name}  viewers={item.viewers} favourite={item.favourite} onDelete={() => onDelete(item.id)}/>
        // <MovieListItem {...item}/>
      ))}
             
     </div>
   )
 }
  
 export default MovieList