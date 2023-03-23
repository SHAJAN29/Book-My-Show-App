import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WeekendIcon from "@mui/icons-material/Weekend";
import { useState } from "react";
import "./BookTickets.css";

export function BookTickets() {
  const navigate = useNavigate();
  const [seat, setSeat] = useState(null);

  const screens = [
    { id: 1, order: "A", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { id: 2, order: "B", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { id: 1, order: "C", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { id: 3, order: "D", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { id: 4, order: "E", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { id: 5, order: "F", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { id: 6, order: "G", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { id: 7, order: "H", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { id: 8, order: "I", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { id: 9, order: "J", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { id: 10, order: "K", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  ];
  const toadydate = new Date();

  const showDay = toadydate.getDay();

  const showData = toadydate.getDate();
  return (
    <div className="BookTickets">
      <h1>book me</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{showDay}</Typography>
        <Typography variant="h5">{showData}</Typography>
        <Box className="box">box</Box>
      </Box>

      {screens.map((element) => {
        return (
          <div className="seeer">
            <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
              {element.order}
            </Typography>
            <div className="seats">
              {element.seats.map((ele, index) => {
                return (
                  <Spidy
                    element={element}
                    ele={ele}
                    index={index}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />}>
        back
      </Button>
    </div>
  );
}

function Spidy({ ele, index, element }) {
  const [selected, setSelected] = useState(false);

  return (
    <div className="seat-booking">
      <WeekendIcon
        color={selected ? "success" : "grey"}
        key={index}
        onClick={() => {
          setSelected(!selected);
          console.log("clicked", element.order, { index });
        }}
      />
    </div>
  );
}
