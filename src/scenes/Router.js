import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import GameContext from '../context/GameContext';
import Home from './Home/Home';
import Question from './Question/Question';

const Router = () => {
  return (
    <GameContext.Consumer>
    {game => (
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route path='/question' render={(props) => <Question {...props} game={game} />} />
      </Switch>
    )}
    </GameContext.Consumer>
  )
};

export default Router;

Router.defaultProps = {
  location: {
    state: {
      message: null,
    },
  },
};

Router.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
