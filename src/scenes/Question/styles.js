import styled from 'styled-components';
import { Tile as BulmaTile, Section, Hero as BulmaHero, Heading, Loader } from 'react-bulma-components';
import { COLORS } from '../../constants';

export { Section, Heading, Loader };

export const Hero = styled(BulmaHero)`
  margin-bottom: 1rem;
`;
Hero.displayName = 'Hero';

export const Question = styled(BulmaTile).attrs({
  notification: true,
  color: 'warning',
  kind: 'child',
  renderAs: 'div',
})``;
Question.displayName = 'Question';

export const Answer = styled(BulmaTile).attrs({
  notification: true,
  renderAs: 'div',
})`
  background-color: white !important;
  ${props => props.selectedanswer && `background-color: ${COLORS.DANGER} !important;`}
  ${props => props.correctanswer && `background-color: ${COLORS.SUCCESS} !important;`}
  cursor: ${props => props.answered ? 'normal' : 'pointer'};
  transition: background-color 200ms;
  &:hover {
    ${props => !props.answered && `background-color: #fdfdfd !important`};
  }
`;
Answer.displayName = 'Answer';
