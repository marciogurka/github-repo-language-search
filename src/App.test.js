import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import SearchSelect from './SearchSelect/SearchSelect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils'; // ES6

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />);
});


it('Update the language when the onSelectLanguage is called', () => {
  const wrapper = shallow(<App />);
  act(() => {
    wrapper
      .find(SearchSelect)
      .at(0)
      .props()
      .onSelect({ target: { value: 'C' } });
  });

  expect(wrapper.find("#searched-language").text()).toBe("C");
});

// it('calls the setLanguageSelected fn when onSelectLanguage happens', () => {
// });
