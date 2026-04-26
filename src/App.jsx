import { useState } from "react";
import Header from "./components/Header";
import './App.css'
import MovieJumbotron from "./assets/pages/home/MovieJumbotron";
import CategoryList from "./assets/pages/home/CategoryList";
import TrendingFilm from "./assets/pages/home/TrendingFilm";

function App() {
  const [activeCategory, setActiveCategory] = useState("trending");

  return (
    <>
    <Header />
    <MovieJumbotron />
    <CategoryList active={activeCategory} onChange={setActiveCategory} />
    <TrendingFilm category={activeCategory} />
    </>
  )
}

export default App
