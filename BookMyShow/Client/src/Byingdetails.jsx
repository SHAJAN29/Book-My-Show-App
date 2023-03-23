import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Byingdetails({ selectedSeats, ticketPrice }) {
  const movie = {
    title: "jhon wick chapater-(4) English  ",
    genere: "Romantic",
    glass: "2D",
    certificate: "A",
    langauge: "English",
    teatre: "satyam cinimas",
    showtime: "thursday,25 march,6.30PM",
  };

  const navigate = useNavigate();
  const { langauge, title, genere, glass, certificate, teatre, showtime } =
    movie;
  return (
    <Card sx={{ maxWidth: 300, height: "470px" }}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{ textTransform: "capitalize" }}
          color="dark"
        >
          {title}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 3 }} color="text.secondary">
          {langauge} | {genere} | {glass} | {certificate}
        </Typography>
        <hr />
        <Typography
          sx={{
            opacity: "0.5",
            marginLeft: "-16em",
            fontSize: "13px",
            color: "text.secondary",
          }}
        >
          THEATRES
        </Typography>
        <Typography
          sx={{
            marginLeft: "-9em",
            fontSize: "15px",
            textTransform: "capitalize",
            color: "text.secondary",
          }}
        >
          {teatre}
        </Typography>

        <hr />
        <Typography
          sx={{
            opacity: "0.5",
            marginLeft: "-16em",
            fontSize: "13px",
            color: "text.secondary",
          }}
        >
          ShowTime
        </Typography>
        <Typography
          sx={{
            marginLeft: "-4em",
            fontSize: "15px",
            textTransform: "capitalize",
            color: "text.secondary",
          }}
        >
          {showtime}
        </Typography>
        <hr />
        <Typography variant="subtitle" sx={{ fontSize: "12px" }}>
          Avg.Ticket Fare RS:{ticketPrice}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Typography
            sx={{
              fontSize: "17px",
              textTransform: "capitalize",
              color: "dark",
            }}
          >
            Seats :{selectedSeats}
          </Typography>

          <Typography
            sx={{
              fontSize: "17px",
              textTransform: "capitalize",
              color: "dark",
            }}
          >
            Total :{ticketPrice * selectedSeats}
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          translate: "0px 2.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          sx={{ width: "100%" }}
          color="warning"
          variant="contained"
          size="large"
          onClick={() => navigate("/BillingPage")}
        >
          CONTINUE
        </Button>
        <Button
          onClick={() => navigate("/")}
          size="large"
          sx={{ width: "100%" }}
        >
          cencel
        </Button>
      </CardActions>
    </Card>
  );
}
