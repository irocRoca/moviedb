import MovieCard from "./MovieCard";

import { Splide, SplideSlide } from "@splidejs/react-splide";

const ListMovies = ({ movies, handleClick }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Splide
        options={{
          rewind: true,
          gap: "1em",
          autoWidth: true,
          pagination: false,
          start: 0,
        }}
      >
        {movies &&
          movies.map((movie) => (
            <SplideSlide key={movie.id}>
              <MovieCard movie={movie} handleClick={handleClick} />
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
};

export default ListMovies;
