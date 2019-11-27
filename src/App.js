import React, { useState, useEffect } from 'react';
import AppHeader from './AppHeader/AppHeader';
import SearchSelect from './SearchSelect/SearchSelect';
import RepoList from './RepoList/RepoList';
import Typography from '@material-ui/core/Typography';
import { appStyles } from './App.style';
import axios from 'axios';


/**
 * @name App
 * @description The app main component
 * @author Márcio José Gurka Júnior <marciogurkajr@gmail.com>
 */
function App() {
  const classes = appStyles();
  const [languageSelected, setLanguageSelected] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreResults, setHasMoreResults] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [scroller, setScroller] = useState(null);

  /**
 * @name onSelectLanguage
 * @description Function that sets the selected language and calls the Github API function
 * @param value - The language option selected
 * @author Márcio José Gurka Júnior <marciogurkajr@gmail.com>
 */
  const onSelectLanguage = (langOption) => {
    if(langOption !== languageSelected) {
      setSearchResults([])
      setPageNumber(1)
    }
    setLanguageSelected(langOption);
  }

  /**
 * @name searchLanguageRepos
 * @description Function that realizes the API call and updates the results
 * @param value - The language option selected
 * @author Márcio José Gurka Júnior <marciogurkajr@gmail.com>
 */
  const searchLanguageRepos = async () => {
    let url = `https://api.github.com/search/repositories?q=language:${languageSelected}&sort=stars&page=${pageNumber}`;
    if(!isLoading && hasMoreResults) {
      setIsLoading(true);
      try {
        const result = await axios(url);
        setSearchResults(searchResults.concat(result.data.items));
        setIsLoading(false);
        if (result.data.total_count === searchResults.length)
          setHasMoreResults(false);
      } catch (error) {
        setIsLoading(true);
      }
    }
  }

  const handleScroll = () => {
    if(scroller && ((scroller.clientHeight + scroller.scrollTop) > scroller.scrollHeight - 200)) {
      setPageNumber(pageNumber + 1)
    }
  }

  useEffect(() => {
    if(languageSelected) 
      searchLanguageRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageSelected, pageNumber]);

  return (
    <div className={classes.app}>
      <AppHeader/>
      <main className={classes.mainContainer} onScroll={handleScroll} ref={(scroller) => setScroller(scroller)}>
        <Typography variant="h2" component="h1" gutterBottom>
          Github Repo Search
        </Typography>
        <SearchSelect languageSelected={languageSelected} onSelect={event => onSelectLanguage(event.target.value)}/>
        { languageSelected && <Typography variant="h5" component="h4"> Results for "<Typography id="searched-language" variant="h5" component="span">{ languageSelected }</Typography>": </Typography> }
        <RepoList repositories={searchResults} loading={isLoading}/>
      </main>
    </div>
  );
}

export default App;
