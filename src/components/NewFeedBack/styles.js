import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  textarea {
    border-radius: 20px;
    resize: none;
    width: 100%;
    max-width: 400px;
    height: 80px;
    padding: 10px 15px;
    margin: 5px 0;
  }

  button {
    margin-top: 5px;
    background-color: #4a90e2;
    color: #ffffff;
    border: 0;
    padding: 5px 10px;
    max-width: 100px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background-color: ${darken(0.1, '#4a90e2')};
    }
  }
`;
