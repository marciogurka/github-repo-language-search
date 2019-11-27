import React from 'react';
import RepoListItem from './RepoListItem';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '@material-ui/core/Card';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<RepoListItem />);
});

it('do not display a Card when there is no repository available', () => {
  const baseProps = {
    repository: null,
  };
  const wrapper = shallow(<RepoListItem { ...baseProps } />);

  expect(wrapper.find(Card).length).toBe(0);
});

it('display a Card when there is a repository available', () => {
    const baseProps = {
      repository: {
            "id": 121395510,
            "name": "CS-Notes",
            "owner": {
                "login": "CyC2018",
                "avatar_url": "https://avatars3.githubusercontent.com/u/36260787?v=4",
            },
            "description": ":books: 技术面试必备基础知识、Leetcode、Java、C++、Python、后端面试、计算机操作系统、计算机网络、系统设计",
            "url": "https://api.github.com/repos/CyC2018/CS-Notes",
            "html_url": "https://github.com/CyC2018/CS-Notes",
            "forks_url": "https://api.github.com/repos/CyC2018/CS-Notes/forks",
            "stargazers_url": "https://api.github.com/repos/CyC2018/CS-Notes/stargazers",
            "stargazers_count": 83999,
            "language": "Java",
            "forks_count": 26938,
        }
    };
    const wrapper = shallow(<RepoListItem { ...baseProps } />);
  
    expect(wrapper.find(Card).length).toBe(1);
  });
