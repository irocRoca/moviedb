import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import classes from "./Hero.module.css";

const StyledButton = styled(Button)({
  backgroundColor: "#222831",
  marginTop: 20,
  "&:hover": {
    backgroundColor: "white",
    color: "#222831",
  },
});

const Hero = ({ movie: { title, backdrop_path, overview } }) => {
  return (
    <div style={{ position: "relative" }}>
      <div className={classes.hero}>
        <img
          alt={title}
          src={`http://image.tmdb.org/t/p/original${backdrop_path}`}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          zIndex: "100",
        }}
      >
        <h3 className={classes.title}>{title}</h3>
        <Typography
          variant="body1"
          gutterBottom
          className={classes.description}
        >
          {overview}
        </Typography>
        <StyledButton variant="contained">View More</StyledButton>
      </div>
    </div>
  );
};

export default Hero;
