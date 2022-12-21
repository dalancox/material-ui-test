import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';


import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';




export default function Home() {

    const [userData, setUserData] = useState(null)
    const [selectedRow, setSelectedRow] = useState({})

    useEffect(() => {
        const fetchedData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();
            setUserData(json);
        }

        fetchedData();
    },[])

    return (
        <main>
            <Grid justifyContent={'space-between'} container>
            <Grid item>
                <Typography className='header' variant="h4" fontWeight='bold'>
                    Home
                </Typography>
            </Grid>
            <Grid item>
                <Link to='/'>See details for {selectedRow.name}</Link>
            </Grid>
            </Grid>
            <Divider />
            <Grid container my={2} spacing={2}>
                <Grid item xs={12} lg={9}>
                <TableContainer component={Paper}>
                <Table aria-label='simple table'>
                    <TableHead>
                    <TableRow hover>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Website</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    { userData ?
                        userData.map((row) => (
                            <TableRow
                            key={row.id}
                            hover
                            onClick={() => 
                                setSelectedRow(row)
                            }
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                        
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.address.street}</TableCell>
                            <TableCell>{row.website}</TableCell>
                        
                        </TableRow>
                        )) : "Loading..."
                    }
                    </TableBody>
                </Table>
            </TableContainer>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Card >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <ShoppingBasketIcon />
                            </Typography>
                            <Typography variant="h6" fontWeight='bold' component="div">
                                
                            </Typography>
                            <Typography variant="body2">
                                View customer shopify data
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Open</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </main>
    )
}