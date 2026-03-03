import { useEffect, useState } from "react";
import Card from "../Components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import MovieCard from "../Components/MovieCard";
import SkeletonCard from "../Components/SkeletonCard";
import Pagination from "../Components/Pagination";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);

        if (!searchQuery.trim()) {
          const data = await getPopularMovies(page);
          setMovies(data.results);
          setTotalPage(data.totalPages);
        } else {
          const data = await searchMovies(searchQuery, page);
          setMovies(data.results);
          setTotalPage(data.totalPages);
        }
      setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to search movies...");
      } finally {
        setLoading(false);
      }
    }, 1000); // 1 second delay

    return () => clearTimeout(timeoutId);
  }, [searchQuery, page]);  

  return (
    <div className="m-9 text-lg flex flex-col gap-5 justify-center items-center">
      <form>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(1);
          }}
          className="bg-white rounded-3xl px-7 py-2 mx-4"
        />
        <button
          type="submit"
          className="bg-teal-400 rounded-3xl px-6 py-2">
          Search
        </button>
      </form>

      {error && <div className="text-gray-300 text-3xl mt-10 font-bold">{error}</div>}

      {loading ? (
        <div className="flex flex-wrap justify-center items-center">
          { Array(8)
          .fill()
          .map((_, index) => (
            <SkeletonCard key={index}/>
          ))
        }
        </div>
      ) : movies.length === 0 ? (
        <h2  className="text-gray-500 text-3xl mt-52 font-bold">No result found.</h2>
      )
      : (
        <div className="flex flex-wrap justify-center">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
      <Pagination 
        page={page} 
        setPage={setPage} 
        totalPages={totalPage}
      />
    </div>
  );
};

export default Home;
