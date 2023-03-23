import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WeekendIcon from "@mui/icons-material/Weekend";
import { useState } from "react";
import "./BookTickets.css";
import { Byingdetails } from "./Byingdetails";

export function BookTickets() {
  const navigate = useNavigate();
  const [seat, setSeat] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState(0);

  // const screendetails = "";

  const [screens, setScreens] = useState([
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
  ]);
  const toadydate = new Date();

  // const showDay = toadydate.getDay();
  const screen = `screen:${2}`;

  const showData = toadydate.getDate();
  const ticketPrice = 150;
  return (
    <div className="BookTickets">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          backgroundColor: "green",
          height: "100px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "10%",
          }}
        >
          <Typography variant="h6" color={"white"}>
            No of seats
          </Typography>
          <Typography
            sx={{
              backgroundColor: "white",

              textAlign: "center",
              padding: "10px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {selectedSeats}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "10%",
          }}
        >
          <Typography variant="h6" color={"white"}>
            Show Timing
          </Typography>
          <Typography
            sx={{
              backgroundColor: "white",

              textAlign: "center",
              padding: "10px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {selectedSeats}
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="h1"
        color={"white"}
        sx={{ textTransform: "capitalize" }}
      >
        book me
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{seat.index}</Typography>
        <Typography variant="subtitle" color={"white"}>
          Number of seats booked: {selectedSeats === 0 ? "" : selectedSeats} for
          a price of INR:
          {selectedSeats !== 0 ? ticketPrice * selectedSeats : ""}
        </Typography>

        <Typography variant="subtitle" color={"white"}>
          3D Executive Screen RS.150
        </Typography>

        <Typography variant="h5">{showData}</Typography>
        <Box className="box">
          <Typography variant="h6">{screen}</Typography>
        </Box>
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
                    setSeat={setSeat}
                    setSelectedSeats={setSelectedSeats}
                    selectedSeats={selectedSeats}
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
      <Box sx={{ position: "absolute", top: "20%", right: "3%" }}>
        <Byingdetails ticketPrice={ticketPrice} selectedSeats={selectedSeats} />
      </Box>
    </div>
  );
}

function Spidy({
  ele,
  index,
  element,
  setSeat,
  setSelectedSeats,
  selectedSeats,
}) {
  const [selected, setSelected] = useState(false);
  const { order } = element;
  const [blocked, setBlocked] = useState(false);
  return (
    <div className="seat-booking">
      <WeekendIcon
        className="seat"
        color={selected ? "success" : blocked ? "red" : "action"}
        key={index}
        onClick={() => {
          setSelected(!selected);
          setSeat({ index: index + 1 }, { order: order });
          {
            selected === true
              ? setSelectedSeats(selectedSeats - 1)
              : setSelectedSeats(selectedSeats + 1);
          }
        }}
      />
    </div>
  );
}
