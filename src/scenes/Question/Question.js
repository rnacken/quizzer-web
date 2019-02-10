import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'

import { GAME, API_URL } from '../../constants';
import { getActivePlayer, getCategoryName, getRandomNumber } from '../../helpers';
import Button from '../../shared/Button/Button';
import * as Styles from './styles';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: 0,
      correctAnswer: null,
      questions: [],
      answered: false,
      loading: false,
      error: false,
      score: 0,
    };
  }

  componentDidMount() {
    const activePlayer = getActivePlayer(this.props.game);
    const category = activePlayer ? activePlayer.category : null;
    this.loadQuestions(category);
  }

  selectAnswer = (answerIndex, correctAnswerIndex) => {
    const { answered } = this.state;
    const scoreIncrement = answerIndex === correctAnswerIndex ? 1 : 0;
    if (!answered) {
      this.setState(state => ({
        answered: answerIndex,
        score: state.score + scoreIncrement,
      }));
    }
  }

  nextQuestion = () => {
    if (this.state.activeQuestion === 9) {
      // finsihed!
      const { score } = this.state;
      this.props.game.actions.saveScore(score);
    } else {
      const correctAnswer = getRandomNumber(4);
      this.setState(state => ({
        activeQuestion: state.activeQuestion + 1,
        answered: false,
        correctAnswer,
      }));
    }
  }

  loadQuestions = (category) => {
    if (this.props.game.status === GAME.DOING) {
      // check if the game is in progress, otherwise don't call the api to prevent no-op,
      // because component will be unmounted
      this.setState({ loading: true });
      fetch(`${API_URL}${category}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ loading: false });
          if (data.response_code > 0) {
            // something went wrong with the call
            this.setState({ error: true });
          } else {
            const correctAnswer = getRandomNumber(4);
            this.setState({ questions: data.results, correctAnswer, error: false })
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.warning('got error:', err);
        });
    }
  }

  renderQuestion = () => {
    const { answered, questions, activeQuestion, correctAnswer } = this.state;
    const questionObj = questions[activeQuestion];
    if (questionObj) {
      const answers = [...questionObj.incorrect_answers]
      answers.splice(correctAnswer, 0, questionObj.correct_answer);
      return (
        <Fragment>
          <Styles.Heading size={5}>
            <span dangerouslySetInnerHTML={{__html: questionObj.question}} />
          </Styles.Heading>
          {answers.map((answer, i) => (
            <Styles.Answer
              key={i}
              answered={answered || undefined}
              selectedanswer={(answered && answered === i + 1 && 1) || undefined}
              correctanswer={(answered && i === correctAnswer && 1) || undefined}
              onClick={() => this.selectAnswer(i + 1, correctAnswer + 1)}>
              <span dangerouslySetInnerHTML={{__html: answer}} />
            </Styles.Answer>
          ))}
        </Fragment>
      );
    }
    return null;
  }

  render() {
    const { loading, activeQuestion, error, answered } = this.state;
    const { game } = this.props;
    const activePlayer = getActivePlayer(game);
    const category = activePlayer ? activePlayer.category : null;
    return (
      <Styles.Section>
        {error ? (
          <Styles.Hero notification color="danger">
            Error: couldn't load questions.
          </Styles.Hero>
        ) : (
          <Fragment>
            {game.status === GAME.DOING ? (
              <Fragment>
                {loading ? (
                  <Fragment><Styles.Loader />&nbsp;loading...</Fragment>
                ) : (
                  <Fragment>
                    <Styles.Hero>
                      <Styles.Heading size={4}>
                        Category: {getCategoryName(category)}
                      </Styles.Heading>
                      <Styles.Heading subtitle size={5}>
                        Question: {activeQuestion + 1}
                      </Styles.Heading>
                    </Styles.Hero>
                    <Styles.Question>
                      {this.renderQuestion()}
                      <Button onClick={this.nextQuestion} disabled={!answered}>
                        {activeQuestion === 9 ? 'Return' : 'Next question'}
                      </Button>
                    </Styles.Question>
                  </Fragment>
                )}
              </Fragment>
            ) : (
              <Redirect
                 to={{
                   pathname: "/",
                   state: { message: 'You must first select a player to take a quiz' },
                 }}
               />
            )}
          </Fragment>
        )}
      </Styles.Section>
    );
  }
};

export default Question;

Question.defaultProps = {
  game: {
    status: GAME.START,
    activePlayer: 0,
  }
};

Question.propTypes = {
  game: PropTypes.shape({}),
  activePlayer: PropTypes.number,
};
