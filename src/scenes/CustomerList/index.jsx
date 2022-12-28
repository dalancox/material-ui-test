// import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

export default function Recharge() {
  const navigate = useNavigate();

  const [users, setUsers] = useState(null);

  const handleClick = () => {};

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setUsers(json);
    };

    getUsers();
  }, []);

  return (
    <main>
      <div className="customer-list.active">
        <Box
          my={2}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users ? (
                users.map((row) => (
                  <TableRow
                    key={row.id}
                    hover
                    onClick={() => {
                      navigate(`/c/${row.id}`);
                    }}
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.website}</TableCell>
                    <TableCell>
                      {row.address.street + ", " + row.address.city}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableCell>Loading...</TableCell>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
}
