import { Container, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ListMovies from "../components/ListMovies";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [trending, setTrending] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const popular = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=11d05f8d97cd0a3dd2d4b69cdc854e0c&language=en-US&sort_by=popularity.desc"
      );
      const discover = await fetch(
        "https://api.themoviedb.org/3/trending/all/week?api_key=11d05f8d97cd0a3dd2d4b69cdc854e0c"
      );
      const data = await discover.json();
      const data2 = await popular.json();
      setTrending(data.results);
      setMovies(data2.results);
    };
    getData();
  }, []);

  const handleClick = (type = "movie", id) => {
    history.push(`/${type}/${id}`);
  };

  return (
    <>
      {movies ? (
        <>
          <Hero movie={movies[0]} />
          <Container maxWidth="lg">
            <Typography variant="h4" mt={4}>
              Most Popular
            </Typography>
            <ListMovies movies={movies} handleClick={handleClick} />
            <Typography variant="h6" my={2}>
              <Link to="/discover" className="btn">
                View More
              </Link>
            </Typography>
            <Typography variant="h4" mt={4}>
              Trending
            </Typography>
            <ListMovies movies={trending} handleClick={handleClick} />
            <Typography variant="h6" my={2}>
              <Link to="/discover" className="btn">
                View More
              </Link>
            </Typography>
          </Container>
        </>
      ) : (
        <>
          <Skeleton variant="rectangular" height={"80vh"} width={"100%"} />
          <Container maxWidth="lg">
            <Typography variant="h4" my={4}>
              Most Popular
            </Typography>
            <Skeleton variant="rectangular" height={250} width={"100%"} />
            <Typography variant="h4" my={4}>
              Trending
            </Typography>
            <Skeleton variant="rectangular" height={250} width={"100%"} />
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
