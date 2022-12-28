import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function Nav() {
  return (
    <>
      <Box display="flex">
        <Link to="/">Home</Link>
        <Link to="/customers">Customer</Link>
      </Box>
    </>
  );
}
