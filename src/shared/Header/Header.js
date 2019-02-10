import React from 'react';

import * as Styles from './styles';

const Header = () => (
  <Styles.Header>
    <Styles.Container>
      <Styles.Heading size={2} align={'center'}>Quizzer</Styles.Heading>
    </Styles.Container>
  </Styles.Header>
);

export default Header;

Header.defaultProps = {

};

Header.propTypes = {

};
