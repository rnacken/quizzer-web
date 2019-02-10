import React from 'react';
import { shallow } from 'enzyme';
import { GameProvider } from '../GameContext';

describe('GameContext', () => {
  const wrapper = shallow(<GameProvider />);
  const actions = wrapper.state().actions;

  describe('actions.selectPlayer', () => {
    it('should select a player', () => {
      actions.selectPlayer(2);  // select Borat
      expect(wrapper.state().activePlayer).toEqual(2);
    });
  })

  describe('actions.saveScore', () => {
    it('should update the state', () => {
      actions.saveScore(9); // save it on activePlayer 2
      const boratPlayer = wrapper.state().players[2];
      expect(boratPlayer.myScore).toEqual(9);
    });
  });
});
