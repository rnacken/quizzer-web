import { ACTIONS, GAME } from '../constants';
import players from '../data/players';

export const initialState = {
  activePlayer: 0,
  players: players || [],
};

const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.START_GAME:
      return { ...state, status: GAME.DOING };
    case ACTIONS.SELECT_PLAYER:
      return { ...state, activePlayer: action.payload };
    case ACTIONS.SAVE_SCORE:
      const newPlayers = state.players.map(player =>
        (player.id === state.activePlayer) ? {
          ...player,
          myScore: action.payload,
          status: GAME.DONE
        } : player
      );
      const gameStatus = newPlayers.filter(player =>
        player.status === GAME.DONE && player.myScore > player.score).length === newPlayers.length ? GAME.DONE : GAME.START;
      return {
        ...state,
        status: gameStatus,
        players: newPlayers,
      };
    case ACTIONS.RESET_GAME:
    return {
      ...state,
      activePlayer: 0,
      status: GAME.START,
      players: players,
    };
    default:
      return state;
  }
};
export default reducer;
