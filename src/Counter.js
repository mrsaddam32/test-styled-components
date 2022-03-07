import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Number = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: red;
  padding: 14px;
  font-weight: bold;
`;

const Button = styled.button`
  color: white;
  border-radius: 10px;
  background: salmon;
  padding: 10px 40px;
  margin-left: 15px;
  border: none;
  cursor: pointer;
`;

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <Container>
        <Number>{this.state.count}</Number>
        <Column>
          <Button onClick={this.increment}>+</Button>
          <Button onClick={this.decrement}>-</Button>
        </Column>
      </Container>
    );
  }
}

export default Counter;
