import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home/Home';

describe('Home', () => {
  it('should render', () => {
    shallow(<Home />);
  });
});
