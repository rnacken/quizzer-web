import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import GameContext from '../../context/GameContext';
import { GAME } from '../../constants';
import { getStatusColor, getActivePlayer } from '../../helpers';

import Avatar from '../../shared/Avatar/Avatar';
import Button from '../../shared/Button/Button';
import Stats from '../../shared/Stats/Stats';

import * as Styles from './styles';

const renderPlayers = game => game.players.map(player => (
    <Avatar
      key={player.id}
      player={player}
      title={player.name}
      isActivePlayer={game.activePlayer === player.id}
      onClick={() => game.actions.selectPlayer(player.id)}
    />
));

const Home = () => (
    <GameContext.Consumer>{(game) => {
      const activePlayer = getActivePlayer(game);
      return activePlayer ? (
        <Fragment>
          {game.status === GAME.DOING
            && <Redirect
             to={{
               pathname: '/question',
             }}
            />}
          <Styles.Section>
            {game.status === GAME.DONE && (
              <Fragment>
                <Styles.Tile notification color="success">
                  <Styles.Heading size={4}>Congratulations! You won all challenges!</Styles.Heading>
                </Styles.Tile>
                <Button onClick={game.actions.resetGame}>
                  Reset game
                </Button>
                <Styles.Spacer size={2} />
              </Fragment>
            )}
            <Fragment>
              <Styles.Avatars>
                {renderPlayers(game)}
              </Styles.Avatars>
              <Styles.PlayerInfo color={getStatusColor(activePlayer)}>
                <Styles.Heading size={5}>{activePlayer.description || ''}</Styles.Heading>
                <Styles.Element>
                  <strong>Status:&nbsp;</strong>
                  {activePlayer.status === GAME.DONE
                    ? (activePlayer.score < activePlayer.myScore
                      ? `You have defeated ${activePlayer.name}!`
                      : `You lost against ${activePlayer.name}. Try again!`)
                    : `You have not challenged ${activePlayer.name} yet`}
                </Styles.Element>
                <Styles.StatsContainer>
                  <Stats player={activePlayer} />
                </Styles.StatsContainer>
                <Button
                  onClick={game.actions.startGame}
                  disabled={activePlayer.status === GAME.DONE
                    && activePlayer.myScore > activePlayer.score}
                  >
                  Challenge {activePlayer.name || '?'}
                </Button>
              </Styles.PlayerInfo>
            </Fragment>
          </Styles.Section>
        </Fragment>
      ) : null;
    }
    }</GameContext.Consumer>

);

export default Home;

Home.defaultProps = {
  game: {
    players: [],
  },
};

Home.propTypes = {
  game: PropTypes.shape({
    players: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};
