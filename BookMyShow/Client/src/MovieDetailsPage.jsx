import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "./Loader";

import "./MovieDetailsPage.css";

export function MovieDetailsPage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:4000/bookingmovie/movie-details/${id}`
      );
      const jsonData = await response.json();

      setData(jsonData);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  // const movie = {
  //   id: "2",
  //   poster: "https://wallpapercave.com/dwp1x/wp11157463.jpg",
  //   title: "vikrem",
  //   genere: "Action crime",
  //   glass: "2D",
  //   certificate: "A",
  //   langauge: "English",
  //   releseDate: "thursday 25 march",
  //   summery:
  //     "A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai.",
  //   trailer: "https://www.youtube.com/embed/NXSigiaZ0W0",
  // };

  console.log(data);

  return loading ? <Loader /> : <SubMoviedetailsPage data={data} id={id} />;
}

function SubMoviedetailsPage({ data, id }) {
  const navigate = useNavigate();
  const {
    poster,
    title,
    genere,
    summery,
    glass,
    certificate,
    langauge,
    releseDate,
    trailer,
  } = data;

  return (
    <div className="movieDetailsPage">
      <Box
        className="Top_page"
        sx={{ filter: "blur(5px)", backgroundColor: "black" }}
      >
        <img src={poster} alt={poster} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "0%",
          filter: "blur(5px)",
          backgroundColor: "black",
          width: "100%",
          height: "50%",
          opacity: "0.5",
          overflow: "hidden",
        }}
      ></Box>
      <Box
        className="ToppageContent"
        sx={{
          display: "flex",

          position: "absolute",
          top: "10%",
          left: "30%",
        }}
      >
        <div className="ToppageContentImages">
          <img src={poster} alt={title} />
        </div>

        <Box sx={{ width: "400px", padding: "50px 20px" }}>
          <Typography
            variant="h3"
            sx={{ textTransform: "capitalize" }}
            color={"#fff"}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle"
            sx={{
              textTransform: "capitalize",

              fontSize: "18px",
            }}
            color={"#fff"}
          >
            {langauge} | {certificate}
          </Typography>
          <br />
          <Typography
            variant="subtitle"
            sx={{
              textTransform: "capitalize",

              fontSize: "12px",
            }}
            color={"#fff"}
          >
            {genere} | {glass} | {releseDate}
          </Typography>

          <br />
          <Typography
            variant="subtitle"
            sx={{
              textTransform: "capitalize",
              translate: "0 4rem",
              fontSize: "12px",
              textAlign: "left",
            }}
            color={"#fff"}
          >
            {summery}
          </Typography>
          <br />
          <Button
            sx={{ translate: "0 4em" }}
            variant="contained"
            onClick={() => navigate(`/trailer/${id}`)}
          >
            watch trailer
          </Button>
        </Box>
      </Box>

      <div className="bottom_page">
        <h1>bottom</h1>
      </div>
    </div>
  );
}
