import React, { Component } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TablePagination,
  TableSortLabel,
  Typography
} from '@material-ui/core';
import { NUMERIC, DATE, ALPHABET } from './constants';


export class SortingTable extends Component {
  
  state = {
    page: 0,
    direction: 'desc',
    coloumn: 'date',
    tableBody: this.props.tableBody,
  }

  handleSortByDate = (direction) => {
    this.setState((state) => ({
      tableBody: state.tableBody.sort(
        (a, b) => {
          return (direction === 'asc' ? 
            new Date(a[state.coloumn]) - new Date(b[state.coloumn]) :  
            new Date(b[state.coloumn]) - new Date(a[state.coloumn])
          )
        }
      )
    }));
  }

  handleSortByAlphaNumeric = (direction) => {
    this.setState((state) => ({
      tableBody: state.tableBody.sort(
        (a, b) => { 
          if (direction === 'asc') {
            if (a[state.coloumn] > b[state.coloumn]) {
              return 1
            } else if (b[state.coloumn] > a[state.coloumn]) {
              return -1
            } else {
              return 0
            }
          } else {
            if (a[state.coloumn] > b[state.coloumn]) {
              return -1
            } else if (b[state.coloumn] > a[state.coloumn]) {
              return 1
            } else {
              return 0
            }
          }
        }
      )
    }));
  }

  handleSort = (coloumn, direction) => {
    const {
      tableHead
    } = this.props;


    const orderAs = tableHead
      .filter((header) => header.id === coloumn)[0]['orderAs'];

    switch (orderAs) {
      case DATE:
        this.handleSortByDate(direction);
        break;
      case NUMERIC:
      case ALPHABET:
      default:
        this.handleSortByAlphaNumeric(direction);
        break;
    }
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage})
  }

  handleOnSortClick = (coloumn) => () => {
    this.setState(
      (state) => {
        const isAscending = coloumn === state.coloumn && state.direction === 'asc';
        const direction = isAscending ? 'desc' : 'asc'; 
 
        return ({
          ...state,
          coloumn: coloumn,
          direction
        });
      },
      () => this.handleSort(coloumn, this.state.direction)
    );
  }

  renderTableHeaderRow() {
    const {
      tableHead
    } = this.props;

    const {
      coloumn,
      direction
    } = this.state;

    return (
      <TableRow>
        {tableHead.map((header) => (
          <TableCell {...header.props} key={header.id}>
            <TableSortLabel
              active={coloumn === header.id}
              direction={coloumn === header.id ? direction : 'asc'}
              onClick={this.handleOnSortClick(header.id)}>
              <Typography variant="body2">
                {header.label}
              </Typography>
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow> 
    );
  }

  renderTableBodyRow() {
    const {
      tableHead,
      rowsPerPage
    } = this.props;

    const {
      page,
      tableBody
    } = this.state;

    return (
      tableBody
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => (
          <TableRow key={index}>
            {tableHead.map((cell) => 
              <TableCell key={cell.id}>
                <Typography variant="body1">
                  {row[cell.id]}
                </Typography>
              </TableCell>
            )}
          </TableRow>
        ))
    )
  }

  render() {
    const {
      tableBody,
      rowsPerPage
    } = this.props;

    const {
      page
    } = this.state;

    return (
      <Table>
        <TableHead>
          {this.renderTableHeaderRow()}
        </TableHead>
        <TableBody>
          {this.renderTableBodyRow()}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[]}
              count={tableBody.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={this.handleChangePage}/> 
          </TableRow>
        </TableFooter>
      </Table>
    );  
  }
}

