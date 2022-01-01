import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Crew = ({ crew }) => {
  return (
    <>
      <Typography variant="h4" my={4}>
        Cast
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {crew.cast.slice(0, 6).map((person) => (
          <Grid item xs={4} sm={2} key={person.id}>
            <Card sx={{ maxWidth: 345, maxHeight: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={
                    person.profile_path
                      ? `http://image.tmdb.org/t/p/w154/${person.profile_path}`
                      : "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
                  }
                  title={person.name}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Crew;
