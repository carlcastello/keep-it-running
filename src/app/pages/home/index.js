import React, { Component } from 'react';

import { Box } from '@material-ui/core';

import TitleDescription from './components/title-description';
import CampaignProgress from './components/campaign-progress';
import DonatorsList from './components/donators-list';

import { progress, donatorsList } from './data';

class Home extends Component {

  render() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignSelf="center"
        maxWidth="700px">
        <TitleDescription/>
        <CampaignProgress data={progress}/>
        <DonatorsList data={donatorsList}/>
      </Box>
    )
  }
}

export default Home;