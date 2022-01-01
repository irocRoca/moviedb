import {
  Container,
  Grid,
  Typography,
  Pagination,
  Skeleton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { getSearch } from "../utils/fetch";

const SearchList = () => {
  const [movies, setMovies] = useState(null);

  let inital = new Array(24).fill("");
  const history = useHistory();
  let params = useParams();
  useEffect(() => {
    const getSearchData = async () => {
      const res = await getSearch(params.title, 1);
      setMovies(res);
    };
    getSearchData();
  }, [params.title]);

  const handleClick = (type = "movie", id) => {
    history.push(`/${type}/${id}`);
  };

  const handleChange = async (event, value) => {
    const res = await getSearch(params.title, value);
    setMovies(res);
  };

  if (!params) return <Typography variant="h1">No results found</Typography>;

  if (params && movies?.results.length === 0) return <>None Found</>;

  return (
    <>
      <Container>
        <Typography variant="overline" display="block" gutterBottom mt={6}>
          Results: {movies && movies.total_results}
        </Typography>
        <div>
          <Grid container spacing={2}>
            {movies
              ? movies.results.map((movie) => (
                  <Grid item xs={6} sm={3} md={2} key={movie.id}>
                    <MovieCard
                      movie={movie}
                      handleClick={handleClick}
                      key={movie.id}
                    />
                  </Grid>
                ))
              : inital.map((_, index) => (
                  <Grid item xs={6} sm={3} md={2} key={index}>
                    <Skeleton variant="rectangular" height={230} width={150} />
                  </Grid>
                ))}
          </Grid>
        </div>
        {movies && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "40px 0",
            }}
          >
            <Pagination
              size="small"
              count={movies.total_pages > 500 ? 499 : movies.total_pages}
              page={movies.page}
              siblingCount={1}
              onChange={handleChange}
            />
          </div>
        )}
      </Container>
    </>
  );
};

export default SearchList;
