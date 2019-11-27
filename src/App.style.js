import { makeStyles } from '@material-ui/core/styles';

export const appStyles = makeStyles(theme => ({
    app: {
      alignItems: 'stretch',
      display: 'flex',
      height: '100vh',
      flexDirection: 'column'
    },
    mainContainer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'flex-start',
      padding: '3em 2em',
    }
  })
);