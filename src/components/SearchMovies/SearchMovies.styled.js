import styled from 'styled-components';

export const Tittle = styled.h1`
  padding: 5px 20px;
  cursor: pointer;
  transition: all 500ms ease-out;
  &:hover {
    color: crimson;
    transform: scale(1.02);
  }
`;
export const Container = styled.div`
  margin-bottom: 20px;
  /* padding: 5px 20px; */
`;
export const Input = styled.input`
  padding: 5px 10px;
  border-radius: 4px;
  border: 2px solid crimson;
  font-size: 26px;
  color: brown;
  transition: all 500ms ease-out;
  &:hover {
    border: 2px solid brown;
    transform: scale(1.05);
  }
`;
export const Form = styled.form`
  padding: 5px 20px;
  display: flex;
  gap: 20px;
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
  &:hover {
    background-color: brown;
    transform: scale(1.05);
    color: white;
    border-color: black;
  }
`;
