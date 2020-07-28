export default (theme) => ({
  boxContainer: {
    border: `3px solid ${theme.palette.primary.main}`,
    borderRadius: '3px',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  titleContainer: {
    backgroundColor: '#fff',
    padding: `0 ${theme.spacing(1)}px`,
    left: `${theme.spacing(1)}px`,
    bottom: `calc(100% - 1.5rem)`,
    [theme.breakpoints.down('xs')]: {
      bottom: `calc(100% - 1rem)`,
    }
  }
});