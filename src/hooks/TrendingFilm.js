import { useQuery } from "@tanstack/react-query";
import { getMoviesByCategory } from "../api/movieservice";

export function useTrendingFilm(category = "trending") {
  return useQuery({
    queryKey: ["movies", category],
    queryFn: () => getMoviesByCategory(category),
  });
}
