import React, { Component } from 'react';

import { Box, withStyles, Typography } from '@material-ui/core';

import styles from './styles';

class TitleDescription extends Component {
  render() {
    const {
      boxContainer,
      titleContainer
    } = this.props.classes;
    return (
      <Box
        className={boxContainer}
        display="flex"
        flexDirection="column"
        alignSelf="center"
        position="relative">
        <Box
          className={titleContainer}
          position="absolute">
          <Typography variant="h1">
            #keepitrunning
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            In sit amet venenatis ex. Suspendisse ac lacinia mi, ut accumsan
            lorem. Suspendisse sodales ligula at metus cursus, id eleifend
            massa condimentum. Integer lorem quam, mollis quis ligula sit
            amet, congue vestibulum quam. Sed sapien ipsum, vestibulum vel
            ornare vitae, blandit eget est.
          </Typography>
        </Box>
      </Box>
    )
  }
}

export default withStyles(styles)(TitleDescription);