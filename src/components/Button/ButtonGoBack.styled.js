import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 5px 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  border: 2px solid crimson;
  font-size: 26px;
  font-weight: 700;
  color: crimson;
  background-color: black;
  transition: all 500ms ease-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: brown;
    transform: scale(1.05);
    color: white;
    border-color: black;
  }
`;
