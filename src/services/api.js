const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getPopularMovies = async (page = 1) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();
    return {
        results: data.results || [],
        totalPages: data.total_pages
    };
};

export const searchMovies = async (query, page = 1) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`);
    const data = await response.json();
    return {
        results: data.results || [],
        totalPages: data.total_pages
    };
};