import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
     
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <div className="nawd">

        <NavLink style={({isActive}) => ({backgroundColor: isActive ? 'black' : 'none', color: isActive ? 'white' : 'black'})} id="navlink" to={"/about"}>Men haqimda</NavLink>
        <NavLink style={({isActive}) => ({backgroundColor: isActive ? 'black' : 'none', color: isActive ? 'white' : 'black'})} id="navlink" to={"/skills"}>Ko'nikmalarim</NavLink>
        <NavLink style={({isActive}) => ({backgroundColor: isActive ? 'black' : 'none', color: isActive ? 'white' : 'black'})} id="navlink" to={"/work"}>Qilgan ishlarim</NavLink>
        <NavLink style={({isActive}) => ({backgroundColor: isActive ? 'black' : 'none', color: isActive ? 'white' : 'black'})} id="navlink" to={"/contact"}>Aloqa</NavLink>
        </div>
    </Box>
  );

  return (
    <div className='descowerbtn'>
      {["menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{color: 'white'}} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}