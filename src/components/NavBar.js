import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Button } from '@mui/material';

const NavBAr = () => {
  return (
    <AppBar position='static' className='app-bar'>
                <Button component={Link} to='/all-news'>World news</Button>
                <Button component={Link} to='/'>Latest news</Button>
                <Button component={Link} to='/fav-news'>Favorite news</Button>
                  
    </AppBar>
  )
}

export default NavBAr