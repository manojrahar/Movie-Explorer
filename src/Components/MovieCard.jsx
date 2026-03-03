import { Heart } from 'lucide-react'
import React, { useState } from 'react'
import { useMovieContext } from '../Context/MovieContext'

const MovieCard = ({movie}) => {
  const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
  const favorite = isFavorite(movie.id);

  const onFavoriteClick =(e) => {
    e.preventDefault();
    if (favorite)
      removeFromFavorites(movie.id)
    else
      addToFavorites(movie)
    setfavBtn('red')
  }

  return (
    <div className='m-4 w-60 h-[350px] text-center border border-gray-700 rounded-2xl overflow-hidden text-gray-400 hover:scale-105 duration-300 relative text-sm'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        <div>
          <p className='mt-2'>{movie.title}</p>
          <p className='mb-1'>{movie.release_date?.split("-")[0]}</p>
          <button onClick={onFavoriteClick}>  
            <Heart className='absolute top-2 right-2' fill={favorite ? 'red' : 'gray'}/>
          </button>
        </div>
      </div>
  )
}

export default MovieCard