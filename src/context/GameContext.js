import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gameReducer, { initialState } from './gameReducer';
import { ACTIONS } from '../constants';

const GameContext = React.createContext();

export class GameProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      dispatch: action => {
        this.setState(state => gameReducer(state, action))
      },
      actions: this.getActions(),
    };
  }

  getActions = () => {
    return {
      startGame: () =>
        this.state.dispatch({ type: ACTIONS.START_GAME }),
      selectPlayer: payload =>
        this.state.dispatch({ type: ACTIONS.SELECT_PLAYER, payload }),
      saveScore: payload =>
        this.state.dispatch({ type: ACTIONS.SAVE_SCORE, payload }),
      resetGame: () =>
        this.state.dispatch({ type: ACTIONS.RESET_GAME }),
    };
  }

  render() {
    const { state, props: { children } } = this;
    return (
      <GameContext.Provider
        value={state}
        >
        {children}
      </GameContext.Provider>
    )
  }

}

export default GameContext;

GameProvider.defaultProps = {
  children: null,
};

GameProvider.propTypes = {
  children: PropTypes.node,
};
