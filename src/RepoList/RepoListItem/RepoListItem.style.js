import { makeStyles } from '@material-ui/core/styles';

export const repoListItemStyles = makeStyles(theme => ({
    card: {
      flexGrow: 1,
      margin: 10, 
      width: 300,
    },
    cardActionArea: {
      height: 'calc(100% - 52px)'
    }
  })
);