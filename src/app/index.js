import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/core';

import theme from './theme';

import Pages from './pages';


class App extends Component {
 
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Pages/>
      </ThemeProvider>
    )
  }
}

export default App;
