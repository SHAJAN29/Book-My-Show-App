import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./BillingPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

// CommonJS

export function BillingPage() {
  // const Swal = require("sweetalert2");
  const movie = {
    title: "jhon wick chapater-(4) English  ",
    genere: "Romantic",
    glass: "2D",
    certificate: "A",
    langauge: "English",
    teatre: "satyam cinimas",
    showDate: "thursday 25 march",
    showTime: "6.30 PM",
    screen: "Audi-5",
    seat: "A1,A2",
    numoforders: "2",
    orderPrice: "300",
    ticketsPerHead: "150",
  };

  const {
    title,
    genere,
    glass,
    certificate,
    langauge,
    teatre,
    showTime,
    screen,
    seat,
    showDate,
    numoforders,
    orderPrice,
    ticketsPerHead,
  } = movie;
  const navigate = useNavigate();

  return (
    <div className="paymentDetails">
      <Box sx={{ minWidth: 800 }}>
        <Card variant="outlined" sx={{ height: "400px" }}>
          <CardContent sx={{ translate: "0 2em" }}>
            <Typography
              sx={{ fontSize: "35px", textTransform: "capitalize" }}
              color="dark"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "17px" }}>
              {langauge} | {genere} | {certificate} | {glass}
            </Typography>
            <Typography
              variant="h6"
              color={"GrayText"}
              sx={{
                fontSize: "18px",
                textTransform: "capitalize",
                marginTop: 3,
                mb: 3,
              }}
            >
              Date :
              <span>
                {showDate} {showTime}
              </span>
            </Typography>
            <Typography
              variant="h6"
              color={"GrayText"}
              sx={{ fontSize: "18px", mb: 3, textTransform: "capitalize" }}
            >
              Theartre: <span> {teatre}</span>
            </Typography>

            <Typography
              variant="h6"
              color={"GrayText"}
              sx={{ fontSize: "18px", mb: 3, textTransform: "capitalize" }}
            >
              Screen: <span> {screen}</span>
            </Typography>
            <Typography
              variant="h6"
              color={"GrayText"}
              sx={{ fontSize: "18px", mb: 3, textTransform: "capitalize" }}
            >
              Seat: <span> {seat}</span>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box minWidth={300}>
        <Card variant="outlined" sx={{ height: "400px" }}>
          <Typography
            gutterBottom
            sx={{
              textTransform: "capitalize",
              fontWeight: "500",
              fontSize: "15px",
            }}
          >
            order summery
          </Typography>
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Ticket Fare</Typography>
            <Typography color={"error"}>₹{ticketsPerHead}</Typography>
          </Box>

          <Box
            sx={{
              padding: "0 20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Tickets*{numoforders}</Typography>
            <Typography color={"error"}>₹{orderPrice}</Typography>
          </Box>

          <Box
            sx={{
              padding: "20px 20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>GST</Typography>
            <Typography color={"error"}>
              ₹{calculeteGST(ticketsPerHead, numoforders)}
            </Typography>
          </Box>
          <hr />

          <Box
            sx={{
              padding: "20px 20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Total</Typography>
            <Typography color={"error"}>
              ₹{calculeteGSTwithTotel(ticketsPerHead, numoforders)}
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{ width: "100%", translate: "0px 4.5rem" }}
            onClick={selfi}
          >
            conform
          </Button>
        </Card>
      </Box>
    </div>
  );
}

function calculeteGST(price, qty, gst) {
  var reeta = price * qty;
  var tot_price = (reeta * 18) / 100;
  return tot_price;
}

function calculeteGSTwithTotel(price, qty, gst) {
  var reeta = price * qty;
  var tot_price = (reeta * 18) / 100 + reeta;
  return tot_price;
}

function selfi() {
  Swal.fire("Conformed!", "Ticket Booking conformed check Your Mail", "error");
}
