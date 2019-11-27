import React from 'react';
import Typography from '@material-ui/core/Typography';
import RepoListItem from './RepoListItem/RepoListItem';
import { repoListStyles } from './RepoList.style';

/**
 * @name RepoList
 * @description The repositories list container component
 * @author Márcio José Gurka Júnior <marciogurkajr@gmail.com>
 */
function RepoList(props, context) {
  const classes = repoListStyles();
  const { repositories, loading } = props;
  return (
    <div className={classes.container}>
    {
      ((!repositories || (repositories && repositories.length === 0)) && !loading && (<Typography variant="body1" gutterBottom>Choose a programming language to check the most starred repositories of that language</Typography>))
    }
    {
      repositories && repositories.length > 0 && !loading ? 
        repositories.map(repository => {
          return (<RepoListItem key={repository.id} repository={repository}/>)
        })
      : null
    }
    </div>
  );
}

export default RepoList;
