import React from 'react';
import PropTypes from 'prop-types';
import { getStatusColor } from '../../helpers';
import * as Styles from './styles';

const Avatar = ({ player, isActivePlayer, ...props }) => (
  <Styles.Avatar
    {...props}
    src={player.src}
    isActivePlayer={isActivePlayer}
    color={getStatusColor(player)}
  />
);

export default Avatar;

Avatar.defaultProps = {
  isActivePlayer: false,
};

Avatar.propTypes = {
  player: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
  isActivePlayer: PropTypes.bool,
};
