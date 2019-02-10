import { GAME } from './constants';

export const getActivePlayer = (game) => {
  if (!game || !game.players) { return null; }
  return game.players.find(player => game.activePlayer === player.id);
};

export const getStatusColor = (player) => {
  if (!player) { return null; }
  return player.status === GAME.DONE ? (player.score < player.myScore ? 'info' : 'danger') : 'warning';
};

export const getCategoryName = (category) => {
  // IDs come from trivia-api
  const categoryNames = {
    5: 'boardgames',
    7: 'movies',
    22: 'geography',
  };
  return categoryNames[category] || 'unknown';
};

export const getRandomNumber = maxValue => Math.floor(Math.random() * maxValue);
