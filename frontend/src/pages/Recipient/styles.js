import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;

  header {
    display: flex;
    align-self: stretch;
    align-items: center;
    margin: 40px;

    strong {
      font-size: 20px;
      margin: 0 15px;
    }
  }
`;

export const Wrapper = styled.div`
  border: 2px;
  background: #fff;
  height: 100%;
  border-radius: 4px;
  padding: 20px;
  width: 900px;

  form {
    margin: 50px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 1px;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      /* color: #fff; */
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      /* display: inline-block; */
      margin-top: -200px;
      margin-left: 30px;
      height: 44px;
      width: 80px;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 10px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }

    a {
    margin: 20px;
    background: #9999;
    /* height: 44px;
    width: 180px; */
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 10px;
    opacity: 0.8;
    transition: color(0.03, '#333');

    &:hover {
      opacity: 1;
    }

  }

`;

export const ButtonConfirm = styled.button`
  background: #7159c1;
  color: #fff;
  border-radius: 4px;
`;
