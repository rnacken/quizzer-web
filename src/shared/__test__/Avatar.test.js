import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../Avatar/Avatar';

describe('Avatar', () => {
  it('should render', () => {
    const props = {
      player: {
        src: 'https://some-img-location.com',
      },
    };
    shallow(<Avatar {...props} />);
  });
});
