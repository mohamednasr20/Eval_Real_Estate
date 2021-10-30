import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import { getproperties, getLocationAutoComplete } from './api';
import { theme } from './theme';

const App = () => {
  // useEffect(() => {
  //   // getproperties();
  //   getLocationAutoComplete();
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      <SearchResults />
    </ThemeProvider>
  );
};

export default App;
