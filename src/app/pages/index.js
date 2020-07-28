import React, { Component } from 'react';

import { Box, withStyles, Typography } from '@material-ui/core';

import Home from './home';

import styles from './styles';


class Page extends Component {
  render() {
    const {
      classes: {
        pageContainer
      }
    } = this.props;
    return (
      <Box
        className={pageContainer}
        display="flex"
        flexDirection="column"
        minHeight="100vh">
        <Home/>
      </Box>
    )
  }
}

export default withStyles(styles)(Page);