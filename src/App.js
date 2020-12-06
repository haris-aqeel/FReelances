import React from 'react';
import Home from './layouts/Home'
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Layouts from './layouts'

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Layouts>
        <Home />
        </Layouts>
      </ThemeProvider>
    </>
  );
}

export default App;
