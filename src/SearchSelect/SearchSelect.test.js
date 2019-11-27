import React from 'react';
import { shallow } from 'enzyme';
import SearchSelect from './SearchSelect';
import Select from '@material-ui/core/Select';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<SearchSelect />);
});

it('calls the callback fn when onChange happens', () => {
  const baseProps = {
    onSelect: jest.fn(),
  };
  const event = {
    preventDefault() {},
    target: { value: 'C' }
  };
  const wrapper = shallow(<SearchSelect {...baseProps} />);
  // simulates change event to call onChange cb function of Select component
  wrapper.find(Select).simulate('change', event);
  expect(baseProps.onSelect).toHaveBeenCalled();
});
