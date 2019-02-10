import styled from 'styled-components';
import { Hero, Heading, Container } from 'react-bulma-components';

export { Heading, Container };

export const Header = styled(Hero).attrs({
  color: 'primary',
})`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
