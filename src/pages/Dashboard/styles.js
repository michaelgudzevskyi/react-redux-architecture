import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 54px;
    color: #fff;
    margin-top: 40px;
  }
  span {
    font-size: 45px;
    line-height: 32px;
    margin: 0px 16px 0 16px;
  }
  button {
    width: 66px;
    height: 31px;
    background-color: #e6df07;
    font-size: 29px;
    line-height: 0;
    border: 0;
  }
`;


export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  p {
    font-size: 20px;
    line-height: 32px;
  }

  img {
    width: 100px;
    margin-left: 10px;
    margin-top: 5px;
  }
`;
