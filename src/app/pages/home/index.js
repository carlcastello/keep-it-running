import React, { Component } from 'react';

import { Box } from '@material-ui/core';

import TitleDescription from './components/title-description';
import CampaignProgress from './components/campaign-progress';
import DonatorsList from './components/donators-list';

class Home extends Component {

  renderDescription() {
    return (
      <TitleDescription/>
    )
  }

  renderCampaignProgress() {
    return (
      <CampaignProgress/>
    )
  }

  renderDonationsList() {
    return (
      <DonatorsList/>
    )
  }

  render() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignSelf="center"
        maxWidth="700px">
        {this.renderDescription()}
        {this.renderCampaignProgress()}
        {this.renderDonationsList()}
      </Box>
    )
  }
}

export default Home;