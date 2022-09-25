import { Component } from 'react';
import { Buttons } from './Buttons/Buttons';
import { Title } from './Title/Title';
import { Container } from './App.styled';
import { Statictics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };
  countTotalFeedback = valuesArray => {
    return valuesArray.reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = (totalFeedbacks, positiveFeedbacks) => {
    return Math.round((positiveFeedbacks / totalFeedbacks) * 100);
  };
  render() {
    const valuesArray = Object.values(this.state);
    const totalFeedbacks = this.countTotalFeedback(valuesArray);
    const positiveFeedbacks = this.state.good;
    const positivePersentage =
      totalFeedbacks > 0
        ? this.countPositiveFeedbackPercentage(
            totalFeedbacks,
            positiveFeedbacks
          )
        : 0;

    return (
      <Container>
        <Title>Please leave feedback</Title>
        <Buttons
          feedbacks={Object.keys(this.state)}
          onHandleIncrement={this.handleIncrement}
        ></Buttons>
        <Statictics
          feedbacks={Object.keys(this.state)}
          stats={this.state}
          totalFeedbacks={totalFeedbacks}
          positivePersentage={positivePersentage}
        ></Statictics>
      </Container>
    );
  }
}
