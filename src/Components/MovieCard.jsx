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
    <div className="w-full max-w-[180px] sm:max-w-[200px] text-center border border-gray-700 rounded-2xl overflow-hidden text-gray-400 hover:scale-105 duration-300 relative ">
        <img
          className="w-full h-[250px] object-fill"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
          <button onClick={onFavoriteClick}>  
            <Heart className='absolute top-2 right-2' fill={favorite ? 'red' : 'gray'}/>
          </button>
        <div>
          <p className='mt-2'>{movie.title}</p>
          <p className='mb-1'>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
  )
}

export default MovieCard