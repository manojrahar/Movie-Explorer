import MovieCard from "../Components/MovieCard";
import { useMovieContext } from "../Context/MovieContext"

const Favorites = () => {

  const {favorites} = useMovieContext();

  if(favorites.length > 0) {
    return (
      <div>
        <h2 className="text-gray-300 font-bold text-4xl text-center m-3 p-3">Your Favorites</h2>
        <div className="flex flex-wrap justify-center items-center">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='h-screen text-white flex flex-col justify-center items-center text-2xl'>
        <h2>No Favorite Movie Yet</h2>
        <p>Start adding movies to your favorites and they will appear here.</p>
    </div>
  )
}

export default Favorites