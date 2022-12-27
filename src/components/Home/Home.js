import './Home.css'

import { Card } from '@mui/material';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';


import AutorenewIcon from '@mui/icons-material/Autorenew';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DevicesIcon from '@mui/icons-material/Devices';

export default function Home() {
    return (
        <main>
            <Typography className='header' variant="h4" fontWeight='bold'>
                Home
            </Typography>
            <Divider />
            <Grid container my={2} spacing={2}>
                <Grid item xs={12} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <AutorenewIcon />
                            </Typography>
                            <Typography variant="h6" fontWeight='bold' component="div">
                                Recharge Subscriptions
                            </Typography>
                            <Typography variant="body2">
                                update and view customer subscription data
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Card >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <ShoppingBasketIcon />
                            </Typography>
                            <Typography variant="h6" fontWeight='bold' component="div">
                                Shopify
                            </Typography>
                            <Typography variant="body2">
                                View customer shopify data
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={4}>                
                    <Card >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <DevicesIcon />
                            </Typography>
                            <Typography variant="h6" fontWeight='bold' component="div">
                                Device
                            </Typography>
                            <Typography variant="body2">
                                View onboarding results of devices, schedules and state
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Divider />
        </main>
    )
}