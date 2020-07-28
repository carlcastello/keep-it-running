export default (theme) => ({
  gridContainer: {
    padding: theme.spacing(2),
    // marginBottom: theme.spacing(2)
  },
  progressBar: {
    height: theme.spacing(2),
    backgroundColor: '#d6d6d6',
    '&::after': {
      content: '"60KM"',
      position: 'absolute',
      padding: theme.spacing(.5),
      right: '0',
      fontFamily: theme.typography.h1.fontFamily,
      color: '#000',
    },

    '& > .MuiLinearProgress-dashed ': {
      display: 'none'
    },
    '& > .MuiLinearProgress-bar1Buffer': {
      '&::after': {
        content: '"38KM"',
        position: 'absolute',
        padding: theme.spacing(.5),
        right: '0',
        fontFamily: theme.typography.h1.fontFamily,
        color: '#fff',
      }
    },
    '& > .MuiLinearProgress-bar2Buffer': {
      '&::after': {
        content: '"45.5KM"',
        position: 'absolute',
        padding: theme.spacing(.5),
        right: '0',
        fontFamily: theme.typography.h1.fontFamily,
        color: '#000',
      }
    }
  }
});