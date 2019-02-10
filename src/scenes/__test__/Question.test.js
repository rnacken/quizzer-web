import React from 'react';
import { shallow } from 'enzyme';
import Question from '../Question/Question';
import { GAME } from '../../constants';

describe('Question', () => {
  const gameContext = {
    players: [],
    status: GAME.DOING,
  };
  it('should render', () => {
    shallow(<Question game={gameContext} />);
  });

  it('should increase the score for a correct answer', () => {
    const wrapper = shallow(<Question game={gameContext} />);
    wrapper.setState({
      score: 0,
      activeQuestion: 0,
      correctAnswer: 2,
      questions: [
        {
          question: 'What is a girl-name?',
          incorrect_answers: ['john', 'bob', 'arie'],
          correct_answer: ['julie'],
        },
      ],
      loading: false,
    });
    const correctAnswer = wrapper.find('Answer').at(2);
    correctAnswer.simulate('click');
    expect(wrapper.state().score).toBe(1);
  });
});
