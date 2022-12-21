import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

export default function Recharge() {

    return (
        <main>
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
                    <TableRow hover>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Ip Address</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        data.map((row) => (
                        <TableRow
                            key={row.id}
                            hover
                            >
                            <TableCell><Link style={{color: 'Blue'}} to={`/r/${row.id}`}>{row.full_name}</Link></TableCell>
                            <TableCell>{row.gender}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.ip_address}</TableCell>
                        </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </main>
    )
}

const data = [{
    "id": 1,
    "full_name": "Max Rockcliff",
    "email": "mrockcliff0@4shared.com",
    "gender": "Male",
    "ip_address": "87.26.246.60"
  }, {
    "id": 2,
    "full_name": "Emmy Spurge",
    "email": "espurge1@jiathis.com",
    "gender": "Female",
    "ip_address": "14.145.155.64"
  }, {
    "id": 3,
    "full_name": "Marlyn Biever",
    "email": "mbiever2@phpbb.com",
    "gender": "Female",
    "ip_address": "142.65.181.33"
  }, {
    "id": 4,
    "full_name": "Dillie Lait",
    "email": "dlait3@indiatimes.com",
    "gender": "Male",
    "ip_address": "50.61.111.3"
  }, {
    "id": 5,
    "full_name": "Lydie Izkovitz",
    "email": "lizkovitz4@aboutads.info",
    "gender": "Female",
    "ip_address": "131.84.83.110"
  }]