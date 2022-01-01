import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";
import classes from "./MovieCard.module.css";

const MovieCard = ({ movie, handleClick }) => {
  return (
    <Card
      className={classes.card}
      onClick={() => handleClick(movie.media_type, movie.id)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={
            movie.poster_path
              ? `http://image.tmdb.org/t/p/w154/${movie.poster_path}`
              : "/default.png"
          }
          title={movie.title}
          style={{ width: "fit-content" }}
        />
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
