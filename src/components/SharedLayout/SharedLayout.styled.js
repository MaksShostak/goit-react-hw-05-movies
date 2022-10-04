import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
  box-shadow: 2px 2px 2px grey;
`;
export const Navigate = styled.nav`
  padding: 20px;
  display: flex;
  gap: 30px;
  justify-content: start;
  font-weight: bold;
  font-size: 32px;
`;
export const Navlink = styled(NavLink)`
  text-decoration: none;
  color: black;
  border-radius: 5px;
  padding: 5px;
  transition: all 500ms ease-out;
  &.active {
    color: crimson;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: rgb(223, 189, 52);
  }
`;
