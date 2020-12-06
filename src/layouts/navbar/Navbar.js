import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  topBar:{
    background: 'rgba(24,25,25,.21)',
    boxShadow:'none',
    '& .MuiButton-outlinedPrimary:hover':{
      'border-width': 2
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const [state, setState] = React.useState({
    anchorEl:null,
    value:'Europe'
  });
  const handleClick = (event) => {
    setState({...state, anchorEl :event.currentTarget});
  };
  const handleClose = (prop) => (e) => {
    setState({...state ,anchorEl:null,value:prop})
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.topBar}>
        <Toolbar>
          <div className="hidden lg:flex w-full">
          <Button color="primary" variant="outlined" className="text-white border-2 hover:border-2">Contact Support</Button>
          <Link className="hover:no-underline pl-5"><Button className="text-white">How it works</Button></Link>
          <Link className="hover:no-underline pl-5"><Button className="text-white">Reviews</Button></Link>
          <div className="ml-auto">
          <Button aria-controls="simple-menu" endIcon={<ExpandMoreIcon className="ml-3"/>} variant="outlined" className="text-white py-2 border-gray-600 focus:border-gray-600" aria-haspopup="true" onClick={handleClick}>
        {state.value}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={state.anchorEl}
        keepMounted
        open={Boolean(state.anchorEl)}
        onClose={handleClose}
       
      
      >
        <MenuItem className="uppercase font-sans font-bold text-sm" onClick={handleClose('Europe')}>Europe</MenuItem>
        <MenuItem className="uppercase font-sans font-bold text-sm" onClick={handleClose('United States')}>United States</MenuItem>
        <MenuItem className="uppercase font-sans font-bold text-sm" onClick={handleClose('Russia')}>Russia</MenuItem>
        
      </Menu>
      <Button color="primary" variant="outlined" className="text-white border-2 hover:border-2 py-2 ml-5">Sign In</Button>
      </div>
      </div>
          <IconButton edge="start" className={ clsx(classes.menuButton,'lg:hidden ml-auto')} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
