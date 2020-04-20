import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: stretch;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      font-size: 20px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;
  }

  p {
    /* color: #fff; */
    font-size: 10px;
    font-weight: bold;
  }

  span {
    margin-right: 20px;
  }
`;

export const Badge = styled.div`
  background: #7159c1;
  border-radius: 4px;
  margin-left: 50px;
`;

export const ButtonConfirm = styled.button`
  background: #7159c1;
  color: #FFF;
  border-radius: 4px;
`;
