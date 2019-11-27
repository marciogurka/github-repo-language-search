import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { repoListItemStyles } from './RepoListItem.style';

/**
 * @name RepoListItem
 * @description The repository item component
 * @author Márcio José Gurka Júnior <marciogurkajr@gmail.com>
 */
function RepoListItem(props, context) {
  const classes = repoListItemStyles();
  const { repository } = props;
  return (
    repository && <Card className={classes.card}>
        <CardActionArea href={repository.html_url} className={classes.cardActionArea}>
          <CardHeader
            avatar={
              <Avatar src={repository.owner.avatar_url} className={classes.avatar}></Avatar>
            }
            title={repository.name}
            subheader={repository.owner.login}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {repository.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
            <Button
              color="primary"
              className={classes.button}
              startIcon={<FavoriteIcon />}
              href={repository.stargazers_url}
            >
              {repository.stargazers_count}
            </Button>
            <Button
              color="primary"
              className={classes.button}
              startIcon={<ShareIcon />}
              href={repository.forks_url}
            >
              {repository.forks}
            </Button>
        </CardActions>
      </Card>
  );
}

export default RepoListItem;