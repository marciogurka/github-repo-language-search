import { makeStyles } from '@material-ui/core/styles';

export const repoListStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      marginTop: 16,
      width: '100%'
    }
  })
);