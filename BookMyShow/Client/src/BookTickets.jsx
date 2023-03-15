import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function BookTickets() {
  const navigate = useNavigate();

  return (
    <div className="BookTickets">
      <h1>book me</h1>

      <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />}>
        back
      </Button>
    </div>
  );
}
