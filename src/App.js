import React, { Component } from 'react';
import Helmet from 'react-helmet'
import PropTypes from 'prop-types';

import { GameProvider } from './context/GameContext';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import Router from './scenes/Router';

import * as Styles from './styles.js';

class App extends Component {
  render() {
    return (
      <GameProvider>
        <Helmet
          title="Quizzer"
          meta={[
            { name: 'description', content: 'quizzer is a quiz game' },
            { name: 'keywords', content: 'quiz, game, react' },
          ]}
        />
        <Header />
        <Styles.Content>
          <Router />
        </Styles.Content>
        <Footer />
      </GameProvider>
    );
  }
}

export default App;

App.defaultProps = {
  location: {
    state: {
      message: null,
    },
  },
};

App.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
