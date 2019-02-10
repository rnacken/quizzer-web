import styled from 'styled-components';
import { Section, Tile, Element, Heading } from 'react-bulma-components';

export { Tile, Element, Section, Heading };

export const StatsContainer = styled(Section).attrs({
  renderAs: 'article',
})`
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: white;
  max-width: 400px;
`;

export const PlayerInfo = styled(Tile).attrs({
  kind: 'child',
  notification: true,
})``;

export const Avatars = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Spacer = styled.div`
  margin-bottom: ${props => props.size}rem;
`
