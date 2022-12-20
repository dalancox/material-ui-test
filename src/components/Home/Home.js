// import { Link } from 'react-router-dom'
import './Home.css'

import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AutorenewIcon from '@mui/icons-material/Autorenew';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DevicesIcon from '@mui/icons-material/Devices';
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Home() {

    const width = 500

    return (
        <>
        <div className='home-wrapper'>
            <h1>Home</h1>
            <hr></hr>
            <div className='nav-cards'>
                <Card sx={{ minWidth: width }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <AutorenewIcon />
                        </Typography>
                        <Typography variant="h5" component="div">
                            Recharge Subscriptions
                        </Typography>
                        <Typography variant="body2">
                            update and view customer subscription data
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Open</Button>
                    </CardActions>
                </Card>
                <Card sx={{ minWidth: width }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <ShoppingBasketIcon />
                        </Typography>
                        <Typography variant="h5" component="div">
                            Shopify
                        </Typography>
                        <Typography variant="body2">
                            View customer shopify data
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Open</Button>
                    </CardActions>
                </Card>
                <Card sx={{ minWidth: width }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <DevicesIcon />
                        </Typography>
                        <Typography variant="h5" component="div">
                            Device
                        </Typography>
                        <Typography variant="body2">
                            View onboarding results of devices, schedules and state
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Open</Button>
                    </CardActions>
                </Card>
            </div>
            <hr></hr>
        </div>
        </>
    )
}