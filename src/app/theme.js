import { createMuiTheme } from '@material-ui/core/styles';

const REACT_PURPLE = '#282c34'

export default createMuiTheme({
  palette: {
    primary: {
      main: REACT_PURPLE
    },
    background: {
      default: '#ffffff',
    }
  },
  typography: {
    h1: {
      color: REACT_PURPLE, 
      fontFamily: 'IBM Plex Mono, monospace',
      fontSize: '3rem',
      '@media (max-width: 600px)': {
        fontSize: '2rem'
      }
    },
    h2: {
      color: REACT_PURPLE, 
      fontFamily: 'IBM Plex Mono, monospace',
      fontSize: '2.25rem',
      '@media (max-width: 600px)': {
        fontSize: '1.5rem'
      }
    },
    h3: {
      color: REACT_PURPLE, 
      fontFamily: 'IBM Plex Mono, monospace',
      fontSize: '2rem',
      '@media (max-width: 600px)': {
        fontSize: '1.25rem'
      }
    },
    body1: {
      lineHeight: 1.3,
      fontSize: '1rem'
    },
    body2: {
      fontWeight: 500,
      lineHeight: 1.3,
      fontSize: '1rem'
    }
  },
  spacing: 20,
  breakpoints: {

  }
});