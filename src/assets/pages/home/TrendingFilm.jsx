import MoviePosterCard from "../../../components/MoviePosterCard";
import { useTrendingFilm } from "../../../hooks/TrendingFilm";


export default function TrendingFilm({ category = "trending" }) {
  const { data: movies, isLoading, isError } = useTrendingFilm(category);

  if (isLoading) {
    return (
      <div className="mt-20 text-center text-white">
        Loading movies...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-20 text-center text-red-500">
        Failed to load movies
      </div>
    );
  }

  return (
    <section className="mt-20">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5 max-w-screen-xl mx-auto w-full ">
        {movies.map((movie) => (
          <MoviePosterCard
            key={movie.id}
            title={movie.title}
            poster={
              import.meta.env.VITE_TMDB_BASEIMAGEURL +
              movie.poster_path
            }
            rating={movie.vote_average.toFixed(1)}
            year={movie.release_date?.split("-")[0]}
            onClick={() =>
              console.log("Clicked movie:", movie.id)
            }
          />
        ))}
      </div>
    </section>
  );
}
