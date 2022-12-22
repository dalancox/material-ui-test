import "./Recharge.css"

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { useEffect, useState } from 'react';

import Customer from '../Customer/Customer';

export default function Recharge() {

    const [users, setUsers] = useState(null);
    const [show, setShow] = useState(false);
    const [selectedRow, setSelectedRow] = useState({})
    console.log(selectedRow)

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();
            setUsers(json);
        }  

        getUsers();
    }, [])

    return (
        <main>
            <Button 
                onClick={() => { setShow(false) }}
                disabled={!show}
                startIcon={<ChevronLeftIcon />}
                variant="outlined"
                >
                Go back
            </Button>
            <div className={show ? 'customer-list': 'customer-list.active'}>
                <Typography className='header' variant="h4" fontWeight='bold'>
                    Recharge
                </Typography>
                <Divider />
                <Box my={2}>
                    <TextField 
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <SearchIcon />
                        </InputAdornment>
                    ),
                    }} id="input-with-icon-adornment" fullWidth label="Email" variant="outlined" placeholder='Enter Email' />
                </Box>
                <TableContainer component={Paper}>
                    <Table aria-label='simple table'>
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Website</TableCell>
                            <TableCell>Address</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        { users ? 
                            users.map((row) => (
                            <TableRow
                                key={row.id}
                                hover
                                onClick={() => {
                                    setShow(true)
                                    setSelectedRow(row)
                                }}
                                sx={{
                                    '&:hover': {
                                        cursor: "pointer"
                                    }
                                }}
                                >
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.website}</TableCell>
                                <TableCell>{row.address.street + ", " + row.address.city}</TableCell>
                            </TableRow>
                            ))
                            :
                            "Loading..."
                        }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={show ? 'customer.active' : 'customer'}>
                <Customer customer={selectedRow} />
            </div>
        </main>
    )
}