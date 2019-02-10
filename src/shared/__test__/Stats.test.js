import React from 'react';
import { shallow } from 'enzyme';
import Stats from '../Stats/Stats';

describe('Stats', () => {
  it('should render', () => {
    shallow(<Stats />);
  });
});
