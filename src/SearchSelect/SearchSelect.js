import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { searchSelectStyles } from './SearchSelect.style';
import { availableLanguages } from './languagesData';

export default function SearchSelect(props, context) {
  const classes = searchSelectStyles();
  const { languageSelected, onSelect } = props;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="language-select">Please select your language</InputLabel>
      <Select
        labelId="language-select"
        id="language-select"
        value={ languageSelected }
        onChange={ event => onSelect(event) }
      >
        {
          availableLanguages.map(languageInfo => {
            return (
              <MenuItem key={languageInfo.value} value={languageInfo.value}>
                {languageInfo.label}
              </MenuItem>
            );
          })
        }
      </Select>
      <FormHelperText>After you select one available language the search will start automatically</FormHelperText>
    </FormControl>
  );
}