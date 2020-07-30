import React, { Component } from 'react';

import { withStyles, Grid, Typography, Box, LinearProgress } from '@material-ui/core';

import styles from './styles';


const CAMPAIGN_PROGRESS = [
  {key: 'goal', label: 'Goal'},
  {key: 'fundsRaised', label: 'Funds Raised'},
  {key: 'distanceRaised', label: 'Distance Raised'},
  {key: 'ranDistance', label: 'Total Ran'},
]

class CampaignProgress extends Component {
 
  renderCard = (element) => {
    const {
      data
    } = this.props;

    return (
      <Grid key={element.key} item sm={3} xs={6}>
        <Box marginBottom={.25}>
          <Typography variant="h3">
            {data[element.key].label}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            {element.label}
          </Typography>
        </Box>
      </Grid>
    );
  }

  renderKMProgressBar() {
    const {
      data,
      classes: {
        progressBar
      }
    } = this.props;

    const goalKM = data.goal.value / 2;
    const fundsRaisedKM = data.fundsRaised.value / 2;

    const totalRanInPercentage = (data.ranDistance.value / goalKM) * 100;
    const totalFundsRaisedInPercentage = (fundsRaisedKM / goalKM) * 100;

    return (
      <Grid item xs={12}>
        <LinearProgress
          className={progressBar}
          variant="buffer"
          value={totalRanInPercentage}
          valueBuffer={totalFundsRaisedInPercentage}/>
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
        {CAMPAIGN_PROGRESS.map(this.renderCard)}
        {this.renderKMProgressBar()}
      </Grid>
    );
  }
}

export default withStyles(styles)(CampaignProgress);