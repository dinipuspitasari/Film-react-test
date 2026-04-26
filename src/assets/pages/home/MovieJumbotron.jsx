import MovieCard from "../../../components/MovieCard";


export default function MovieJumbotron() {
  const heroMovies = [
    {
      title: "Hotel Transylvania 2",
      image: "https://www.cityofcarrollton.com/home/showpublishedimage/10920/636094614436970000",
      bgColor: "#2b5f8f",
    },
    {
      title: "Angry Bird Movie 3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrvo2sesSuWfmrcH-aOBcxhapJ_qUm73R6w&s",
      bgColor: "#8faad1",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[40%_60%] mt-20 mx-auto w-full max-w-screen-xl px-4">
      {heroMovies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          image={movie.image}
          bgColor={movie.bgColor}
          label={movie.label}
        />
      ))}
    </div>
  );
}
