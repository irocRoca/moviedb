import { Container, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ListMovies from "../components/ListMovies";
import { Link, useHistory } from "react-router-dom";
import { getDiscover, getPopular } from "../utils/fetch";

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [trending, setTrending] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const popular = await getPopular();
      const discover = await getDiscover();
      const data = await discover;
      const data2 = await popular;
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
