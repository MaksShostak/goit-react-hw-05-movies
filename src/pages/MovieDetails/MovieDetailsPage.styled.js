import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Tittle = styled.h2`
  padding: 5px 20px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 500ms ease-out;
  &:hover {
    color: crimson;
    transform: scale(1.02);
  }
`;
export const Container = styled.div`
  margin-bottom: 20px;
  padding: 5px 20px;
  border-bottom: 2px solid gray;
  box-shadow: 2px 2px 2px grey;
`;
export const ContainerMovie = styled.div`
  display: flex;
  gap: 40px;
  padding: 5px 20px;
  align-items: flex-start;
  border-bottom: 2px solid gray;
  box-shadow: 2px 2px 2px grey;
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
export const ButtonLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 5px 20px;
  margin-bottom: 20px;
`;
export const MovieItem = styled.li`
  margin-bottom: 10px;
  color: black;
  font-size: 24px;
  font-weight: 500;
`;
export const MovieInfo = styled.p`
  margin-top: 10px;
  color: #59072b;
  font-size: 20px;
  font-weight: 600;
`;
export const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: black;
  padding: 5px 20px;
  margin-bottom: 20px;
  font-weight: 700;

  transition: all 200ms ease-out;
  &.active {
    color: crimson;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: rgb(223, 189, 52);
  }
`;
