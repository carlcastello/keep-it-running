import React, { Component } from 'react';

import { withStyles, Grid, Typography, Box, LinearProgress } from '@material-ui/core';

import styles from './styles';

class CampaignProgress extends Component {
 
  renderCard(header, description) {
    return (
      <Grid item sm={3}>
        <Box marginBottom={.25}>
          <Typography variant="h3">
            {header}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            {description}
          </Typography>
        </Box>
      </Grid>
    );
  }

  renderFundsRaised() {
    return (
      this.renderCard('$232', 'Funds Raised')
    );
  }

  renderTotalParticipants() {
    return (
      this.renderCard('50', 'Participants')
    );
  }

  renderTotalKilometers() {
    return (
      this.renderCard('45.5KM', 'Total Distance')
    );
  }

  renderTotalRan() {
    return (
      this.renderCard('38.5KM', 'Total Ran')
    )
  }

  renderProgressBar() {
    const {
      classes: {
        progressBar
      }
    } = this.props;

    return (
      <Grid item xs={12}>
        <LinearProgress
          className={progressBar}
          variant="buffer"
          value="70"
          valueBuffer="85"/>
      </Grid>
    )
  }

  render() {
    const {
      classes: {
        gridContainer
      }
    } = this.props;

    return (
      <Grid 
        container
        className={gridContainer}
        spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h2">
            Progress
          </Typography>
        </Grid>
        {this.renderTotalParticipants()}
        {this.renderFundsRaised()}
        {this.renderTotalKilometers()}
        {this.renderTotalRan()}
        {this.renderProgressBar()}
      </Grid>
    );
  }
}

export default withStyles(styles)(CampaignProgress);