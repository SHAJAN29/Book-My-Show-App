import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export function MovieCard({ mov }) {
  const { name, poster, summary, rating, id } = mov;
  const navigate = useNavigate();

  const styles = {
    color: rating < 7 ? "red" : "green",
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 340, objectFit: "cover" }}
        image={poster}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography size="small" style={styles}>
          Rating:{rating}
        </Typography>
        <Button size="small" onClick={() => navigate(`/movie-details/${id}`)}>
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
