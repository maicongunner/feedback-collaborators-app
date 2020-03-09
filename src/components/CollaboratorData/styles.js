import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.li`
  margin: 10px 20px;
  border-bottom: 1px solid #cccccc;
  border-radius: 2px;
  padding: 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${darken(0.03, '#ffffff')};
  }
`;
