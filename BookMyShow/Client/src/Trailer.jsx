import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Trailer.css";
import React, { useEffect, useState } from "react";
import { MovieDetailsPage } from "./movieDetailsPage";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "./Loader.jsx";

export function Trailer() {
  const { id } = useParams();

  const [trailerData, setTrailerData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:4000/bookingmovie/movie-details/${id}`
      );
      const jsonData = await response.json();

      setTrailerData(jsonData);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return loading ? <Loader /> : <SubTrailer trailerData={trailerData} />;
}

function SubTrailer({ trailerData }) {
  const navigate = useNavigate();
  const { trailer } = trailerData;
  return (
    <div className="trailer_page">
      <div className="videoPlayPage">
        <iframe
          width="1920"
          height="700"
          src={trailer}
          title="VIKRAM - Official Title Teaser | #KamalHaasan232 | Kamal Haasan | Lokesh Kanagaraj | Anirudh"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <Button
        variant="contained"
        sx={{ fontSize: "20px" }}
        startIcon={<KeyboardBackspaceIcon sx={{ color: "#fff" }} />}
        onClick={() => navigate(-1)}
      >
        back
      </Button>
    </div>
  );
}
