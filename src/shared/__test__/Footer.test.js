import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer/Footer';

describe('Footer', () => {
  it('should render', () => {
    shallow(<Footer />);
  });
});
