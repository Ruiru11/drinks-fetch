import styled from "styled-components";


export const Container = styled.div`
   height: 100vh;
   `
   
   export const CardList = styled.div`
   overflow-y:scroll;
    display:flex;
    place-items:center;
    justify-content: space-evenly;
    max-width: 100vw;
    height:100%;
    flex-wrap:wrap;
    padding-top: 13px;
`;

export const CardItem = styled.div`
  max-width: 320px;
  min-width: 160px;
  width: 100%;
  height: 400px;
  background: white;
  box-shadow: 8px 8px 16px #000;
  padding:32px;
  margin-bottom:32px;
  margin-right:6px;
  margin-left:6px;
`;

export const CardImage = styled.div`
  width: 100%;
  padding: 4px;
  img {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  paddng: 4px;
`;

export const CardFooterItem = styled.div`
  padding: 4px;
  button {
    font-size: 14px;
    appearance: none;
    white-space: nowrap;
    word-break: keep-all;
    cursor: pointer;
    line-height: 1;
    position: relative;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 2px;
    opacity: 1;
    font-weight: 500;
    display: inline-block;
    color: rgb(255, 255, 255);
    width: 100%;
    padding: 16px;
    border-radius: 4px;
    transition: all 0.2s ease-out 0s;
    text-decoration: none;
    background: #000;
    &:hover {
      opacity: 0.9;
    }
  }
`;
