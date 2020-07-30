import React, { Component } from 'react';

import { Box, withStyles, Typography  } from '@material-ui/core';

import styles from './styles';
import SortingTable from '../../../../components/sorting-table';
import { DATE, ALPHABET, NUMERIC } from '../../../../components/sorting-table/constants';


class DonatorsList extends Component {

  renderTable() {
    const {
      data
    } = this.props;

    return (
      <SortingTable
        rowsPerPage={10}
        tableHead={[
          {props: {width: '25%'}, id: 'date', label: 'Date', orderAs: DATE},
          {id: 'name-city', label: 'Name', orderAs: ALPHABET},
          {props: {width: '20%'}, id: 'amount', label: 'Amount', orderAs: NUMERIC}
        ]}
        tableBody={
          data.map((row) => ({
            ...row,
            'name-city': `${row.name}, ${row.city}`,
          }))
        }/>
    );
  }


  render() {
    const {
      classes: {
        boxContainer
      }
    } = this.props;
    return (
      <Box className={boxContainer}>
        <Box marginBottom={.5}>
          <Typography variant="h2">
            Donators
          </Typography>
        </Box>
        {this.renderTable()}
      </Box>
    )
  }
}

export default withStyles(styles)(DonatorsList);
