import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../assets/img/logo.svg'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx'


const useStyles = makeStyles((theme) => ({
  cartButton:{
    'background-color': 'rgba(55,55,55,.39)',
    '&:hover':{
      'background-color': 'rgba(55,55,55,.39)',
    }
  }
}));

export default function Appbarbottom() {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="absolute" className="mt-24 bg-transparent shadow-none">
        <Toolbar className="grid grid-cols-4"> 
         <img src ={Logo} alt="logo"/> 
         <Button className={clsx(classes.cartButton,'col-span-3 justify-self-end text-white py-2 px-3')} startIcon = {<ShoppingCartIcon />}>My order</Button>
        </Toolbar>
        </AppBar>
    </div>
  );
}
