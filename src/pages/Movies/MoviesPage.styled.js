import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-bottom: 20px;
  padding: 5px 20px;
`;

export const MoviesList = styled.ul`
  padding: 5px 20px;
`;
export const MovieItem = styled.li`
  padding: 5px;
  border-bottom: 1px solid gray;
  box-shadow: 2px 2px 2px grey;
`;
export const MovieLink = styled(NavLink)`
  color: rgb(97, 79, 7);
  text-decoration: none;
  transition: all 500ms ease-out;
  font-weight: 700;
  &.active {
    color: crimson;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: crimson;
  }
`;
