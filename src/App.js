import React, { useState } from 'react';
import './style.css';
import styled from 'styled-components';
import Counter from './Counter.js';

const Name = styled.h1`
  font-size: 3rem;
  padding: 30px;
  color: lightblue;
  text-align: center;
  font-family: Arial;
`;

const Button = styled.button`
  border: none;
  display: block;
  font-size: inherit;
  margin: 10px;
  color: white;
  background: ${(props) => (props.isClicked ? 'lime' : 'red')};
  padding: 30px 90px;
  text-transform: uppercase;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`;

// const ThemedButton = styled.button`
//   border: none;
//   display: block:
//   margin: 10px;
//   color: ${(props) => props.theme.main};
//   border-radius: 10px;
//   background: black;
//   padding: 30px 90px;
//   font-size: 1.3rem;
// `;

// ThemedButton.defaultProps = {
//   theme: {
//     main: 'white',
//   },
// };

// const theme = {
//   main: 'lime',
// };

export default function App() {
  const [btnClicked, setBtnClicked] = useState(false);
  const handleBtnClick = () => setBtnClicked(true);

  return (
    <div>
      <Name>Neoline</Name>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button onClick={handleBtnClick} isClicked={btnClicked}>
        {btnClicked ? 'Hello,Stackblitz' : 'Not Clicked'}
      </Button>
      <Counter></Counter>
    </div>
  );
}
