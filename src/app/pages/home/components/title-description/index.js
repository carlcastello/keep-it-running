import React, { Component } from 'react';

import { Box, withStyles, Typography, Grid } from '@material-ui/core';

import styles from './styles';

class TitleDescription extends Component {

  renderDescription() {
    return (
      <Box>
        <Typography paragraph variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          In sit amet venenatis ex. Suspendisse ac lacinia mi, ut accumsan
          lorem. Suspendisse sodales ligula at metus cursus, id eleifend
          massa condimentum. Integer lorem quam, mollis quis ligula sit
          amet, congue vestibulum quam. Sed sapien ipsum, vestibulum vel
          ornare vitae, blandit eget est.
        </Typography>
      </Box>
    );
  }

  renderHowToParticipate() {
    return (
      <Box>
        <Typography paragraph variant="body2">
          How To Participate
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12}>
            <Typography variant="h5">
              1.
            </Typography>
            <Typography>
              Donate to a charity of your choosing
            </Typography>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Typography variant="h5">
              2.
            </Typography>
            <Typography>
              Wait
            </Typography>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Typography variant="h5">
              3.
            </Typography>
            <Typography>
              Contact 
            </Typography>
          </Grid>
        </Grid>
      </Box>
    )
  }

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
        {this.renderDescription()}
        {this.renderHowToParticipate()}
      </Box>
    )
  }
}

export default withStyles(styles)(TitleDescription);