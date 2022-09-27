import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { Container } from './App.styled';
import { Statictics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedbacks !== 0 ? (
            <Statictics
              feedbacks={Object.keys(this.state)}
              stats={this.state}
              totalFeedbacks={totalFeedbacks}
              positivePersentage={positivePersentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}
