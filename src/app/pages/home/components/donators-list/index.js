import React, { Component } from 'react';

import { Box, withStyles, Typography  } from '@material-ui/core';

import styles from './styles';
import { SortingTable } from '../../../../components/sorting-table';
import { DATE, ALPHABET, NUMERIC } from '../../../../components/sorting-table/constants';

const rows = [
  { date: "May 19 2020", name: "Aarl", city: "Edmonton", amount: "$10.00"},
  { date: "Sep 19, 2020", name: "Barl", city: "Edmonton", amount: "$10.00"},
  { date: "Jan 19, 2020", name: "Carl", city: "Edmonton", amount: "$10.00"},
  { date: "May 19, 2020", name: "Darl", city: "Edmonton", amount: "$10.00"},
  { date: "Apr 19, 2020", name: "Earl", city: "Edmonton", amount: "$10.00"},
  { date: "Sep 19, 2020", name: "Farl", city: "Edmonton", amount: "$10.00"},
  { date: "Jan 19, 2020", name: "Garl", city: "Edmonton", amount: "$10.00"},
  { date: "May 19, 2020", name: "Harl", city: "Edmonton", amount: "$10.00"},
  { date: "Jan 19, 2020", name: "Iarl", city: "Edmonton", amount: "$10.00"},
  { date: "May 19, 2020", name: "Carl", city: "Edmonton", amount: "$10.00"},
  { date: "Sep 19, 2020", name: "Carl", city: "Edmonton", amount: "$10.00"},
  { date: "Jan 19, 2020", name: "Carl", city: "Edmonton", amount: "$10.00"},
  { date: "May 19, 2020", name: "Carl", city: "Edmonton", amount: "$15.00"},
  { date: "May 19, 2020", name: "Carl", city: "Edmonton", amount: "$14.00"},
  { date: "Sep 19, 2020", name: "Carl", city: "Edmonton", amount: "$13.00"},
  { date: "Jan 19, 2020", name: "Carl", city: "Edmonton", amount: "$12.00"},
  { date: "May 19, 2020", name: "Carl", city: "Edmonton", amount: "$11.00"},
  { date: "Jan 19, 2020", name: "Carl", city: "Edmonton", amount: "$10.00"}
]


class DonatorsList extends Component {

  renderTable() {
    return (
      <SortingTable
        rowsPerPage={10}
        tableHead={[
          {props: {width: '25%'}, id: 'date', label: 'Date', orderAs: DATE},
          {id: 'name-city', label: 'Name', orderAs: ALPHABET},
          {props: {width: '20%'}, id: 'amount', label: 'Amount', orderAs: NUMERIC}
        ]}
        tableBody={
          rows.map((rows) => ({
            ...rows,
            'name-city': `${rows.name}, ${rows.city}`,
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
