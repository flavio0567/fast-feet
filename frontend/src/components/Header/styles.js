import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1170px;
  margin: 0 auto;
  padding: 10px;

  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 35px;
    margin-right: 7px;

    img {
      height: 20px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 2px solid #eee;
    }

    li.active {
      color: #000;
    }

    a {
      font-weight: bold;
      color: #6666;
      margin-left: 10px;
    }
  }

  aside {
    display: flex;
    align-items: center;

    button {
      color: #FF0000;
      border: 0;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 2px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
`;
