import styled from 'styled-components';
// import { Image } from 'react-bulma-components';
import { COLORS } from '../../constants';

export const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  border: solid 4px ${props => props.isActivePlayer ? 'black' : COLORS[props.color.toUpperCase()]};
  background-color: ${props => COLORS[props.color.toUpperCase()]};
`;
