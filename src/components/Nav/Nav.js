import './Nav.css';

import { Link } from 'react-router-dom';

export default function Nav () {

    return (
        <>
        <div className='nav-wrapper'>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/recharge'><li>Recharge</li></Link>
                <Link to='/shopify'><li>Shopify</li></Link>
                <Link to='/device'><li>Device</li></Link>
            </ul>
        </div>
        </>
    )
}