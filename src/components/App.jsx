import { Component } from 'react';
import { Buttons } from './Buttons/Buttons';
import { Title } from './Title/Title';
import { Container } from './App.styled';
import { Statictics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 10,
    neutral: 20,
    bad: 30,
  };

  render() {
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <Buttons feedbacks={Object.keys(this.state)}></Buttons>
        <Statictics
          feedbacks={Object.keys(this.state)}
          stats={this.state}
        ></Statictics>
      </Container>
    );
  }
}
