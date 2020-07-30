export default (theme) => ({
  gridContainer: {
    padding: theme.spacing(2),
    // marginBottom: theme.spacing(2)
  },
  progressBar: {
    height: theme.spacing(2),
    backgroundColor: '#d6d6d6',
    '&::after': {
      content: props => `'${props.data.goal.value / 2}KM'`,
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
        content: props => `'${props.data.ranDistance.label}'`,
        position: 'absolute',
        padding: theme.spacing(.5),
        right: '0',
        fontFamily: theme.typography.h1.fontFamily,
        color: '#fff',
      }
    },
    '& > .MuiLinearProgress-bar2Buffer': {
      '&::after': {
        content: props => `'${props.data.distanceRaised.label}'`,
        position: 'absolute',
        padding: theme.spacing(.5),
        right: '0',
        fontFamily: theme.typography.h1.fontFamily,
        color: '#000',
      }
    }
  }
});