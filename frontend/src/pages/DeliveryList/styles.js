import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1080px;
  margin: 50px auto;

  /* display: flex;
  flex-direction: column; */

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

    p {
      color: #fff;
      font-size: 10px;
      font-weight: bold;
    }

    input {
      width: 200px;
    }

  }

  ul {
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;
  }

  li {
    padding: 10px;
    border-radius: 4px;
    background: #fff;

    opacity: ${(props) => (props.past ? 0.6 : 1)};

    img {
      height: 30px;
      border-radius: 50%;
    }

    span {
      display: block;
      margin-top: 3px;
      color: ${(props) => (props.available ? '#7159c1' : '#666')};
    }
  }
`;

export const Badge = styled.div`
  background: #7159c1;
  border-radius: 4px;
  margin-left: 50px;
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 220px;
  left: calc(50% - 110px);
  top: calc(100% + 30px);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(255, 255, 255, 0.6);
  }

  span {
    display: block;
    margin-top: 3px;
    color: '##999';
  }
`;
