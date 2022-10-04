import styled from 'styled-components';
export const Container = styled.div`
  margin-bottom: 20px;
  padding: 5px;
`;
export const Tittle = styled.h2`
  padding: 5px 20px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 500ms ease-out;
  &:hover {
    color: crimson;
    transform: scale(1.02);
  }
  border-bottom: 3px solid gray;
  box-shadow: 2px 2px 2px grey;
`;

export const List = styled.ul`
  padding: 5px;
`;
export const Item = styled.li`
  margin-bottom: 20px;
  color: black;
  font-size: 24px;
  font-weight: 500;
  border-bottom: 1px solid gray;
`;
export const CastInfo = styled.p`
  margin-bottom: 10px;
  color: #59072b;
  font-size: 20px;
  font-weight: 600;
`;
export const Span = styled.span`
  margin-bottom: 20px;
  display: block;

  color: #59072b;
  font-size: 20px;
  font-weight: 600;
`;
