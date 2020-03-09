import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
`;

export const BoxCollaboratorData = styled.div`
  padding: 15px;
  margin: 0;
  display: flex;
  flex-direction: column;

  a {
    padding: 5px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #4a90e2;
    width: 80px;
    transition: all 0.3s ease;
    margin-bottom: 40px;

    span {
      margin-left: 5px;
      font-size: 12px;
      color: #4a90e2;
      font-weight: bold;
    }

    &:hover {
      background-color: #4a90e2;

      span {
        color: #ffffff;
      }

      svg {
        fill: #ffffff;
      }
    }
  }

  .box-data-user {
    display: flex;
    align-items: center;

    figure {
      margin-right: 20px;
      img {
        border-radius: 50%;
        max-width: 100%;
      }
    }
    h3 {
      font-weight: bold;
      font-size: 20px;
      line-height: 22px;
    }
  }
`;

export const BoxFeedBacksCollaborator = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
