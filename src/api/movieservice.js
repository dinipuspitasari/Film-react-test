import { tmdbClient } from "./tmdbClient";

const categoryEndpoints = {
  trending: "/trending/movie/day",
  action: "/discover/movie?with_genres=28",
  romance: "/discover/movie?with_genres=10749",
  animation: "/discover/movie?with_genres=16",
  horror: "/discover/movie?with_genres=27",
  special: "/discover/movie?with_genres=878",
};

export const getMoviesByCategory = async (category) => {
  const endpoint = categoryEndpoints[category] || categoryEndpoints["trending"];
  const response = await tmdbClient.get(endpoint);
  return response.data.results;
};
