import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button/Button';

describe('Button', () => {
  it('should render', () => {
    shallow(<Button />);
  });
});
