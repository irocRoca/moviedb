import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import classes from "./MovieDetails.module.css";
import Crew from "./Crew";
import { getCrew, getMovie } from "../utils/fetch";

const StyledButton = styled(Button)({
  backgroundColor: "#222831",
  marginTop: 20,
  "&:hover": {
    backgroundColor: "white",
    color: "#222831",
  },
});

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [crew, setCrew] = useState(null);
  const { type, id } = useParams();

  useEffect(() => {
    const getData = async () => {
      let movieRes = await getMovie(type, id);
      let crewRes = await getCrew(type, id);
      movieRes = await movieRes.json();
      crewRes = await crewRes.json();
      setMovie(movieRes);
      setCrew(crewRes);
    };
    getData();
  }, [type, id]);

  return (
    <>
      {movie ? (
        <>
          <div style={{ marginTop: "60px" }}>
            <Card variant="outlined">
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={
                        movie.poster_path
                          ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
                          : "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg"
                      }
                      title={movie.title}
                    />
                  </CardActionArea>
                </Grid>
                <Grid item md={8}>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h4">
                        {movie.title ? movie.title : movie.original_name}
                      </Typography>
                      <span className={classes.rating}>
                        {Math.floor(movie.vote_average)}
                      </span>
                    </div>
                    <Typography variant="body1" mt={3}>
                      {movie.overview}
                    </Typography>
                    <StyledButton variant="contained" mt={2}>
                      More Info
                    </StyledButton>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
            {crew && <Crew crew={crew} />}
          </div>
        </>
      ) : (
        <>
          <Skeleton variant="rectangular" width="100%" height="80vh" />
        </>
      )}
    </>
  );
};

export default MovieDetails;
