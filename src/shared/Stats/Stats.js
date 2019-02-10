import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryAxis, VictoryBar, VictoryTheme } from 'victory-shared';

import { COLORS } from '../../constants';

const Stats = ({ player }) => {
  const playerName = player.name || '?';
  const myScore = player.myScore || 0;
  return (
    <VictoryChart
      height={120}
      width={240}
      theme={VictoryTheme.material}
      domainPadding={{ y: 30 }}
      animate={{duration: 500, onLoad: { duration: 1000 }}}
      padding={{top: 10, bottom: 30, left: 60, right: 30}}
      >
      <VictoryAxis
        tickValues={[...Array(11).keys()]}
        domain={[0, 10]}
      />
      <VictoryAxis dependentAxis />
      <VictoryBar
        horizontal
        style={{
          data: {
            fill: (d) => d.x === 'you' ? COLORS.INFO : COLORS.WARNING,
          }
        }}
        barWidth={20}
        data={[{ x: playerName, y: player.score }, { x: `you`, y: myScore }]}
        />
    </VictoryChart>
  );
};

export default Stats;


Stats.defaultProps = {
  player: {
    name: '?',
  },
};

Stats.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
  }),
};
