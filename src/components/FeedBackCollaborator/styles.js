import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #eeeeee;
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  border-radius: 20px;

  p {
    span {
      display: block;
      color: #3e3e3e;
      font-size: 10px;
      line-height: 9px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;

    button {
      background-color: #4a90e2;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      display: flex;
      align-items: center;
      padding: 3px 5px;
      transition: background-color 0.3s ease;
      cursor: pointer;

      &:hover {
        background-color: ${darken(0.1, '#4a90e2')};
      }

      span {
        margin-left: 2px;
        font-size: 11px;
        line-height: 10px;
      }

      &.delete {
        background-color: red;
        &:hover {
          background-color: ${darken(0.1, 'red')};
        }
      }
    }
  }
`;
