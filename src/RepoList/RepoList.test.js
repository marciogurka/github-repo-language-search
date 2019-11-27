import React from 'react';
import RepoList from './RepoList';
import RepoListItem from './RepoListItem/RepoListItem'
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Typography from '@material-ui/core/Typography';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<RepoList />);
});

it('Shows the search message when there is no results available', () => {
  const baseProps = {
    repositories: [],
  };
  const wrapper = shallow(<RepoList { ...baseProps } />);

  expect(wrapper.find(Typography).text()).toBe("Choose a programming language to check the most starred repositories of that language");
});

it('Shows a RepoListItem when there is a result available', () => {
  const baseProps = {
    repositories: [{id: 1}],
  };
  const wrapper = shallow(<RepoList { ...baseProps } />);

  expect(wrapper.find(RepoListItem).length).toBe(1);
});

