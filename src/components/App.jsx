import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { Container } from './App.styled';
import { Statictics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = {
    good,
    neutral,
    bad,
  };

  const handleIncrement = feedback => {
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const valuesArray = Object.values(feedbacks);
  const countTotalFeedback = valuesArray => {
    return valuesArray.reduce((acc, value) => {
      return acc + value;
    }, 0);
  };
  const totalFeedbacks = countTotalFeedback(valuesArray);

  const positiveFeedbacks = good;

  const countPositiveFeedbackPercentage = (
    totalFeedbacks,
    positiveFeedbacks
  ) => {
    return Math.round((positiveFeedbacks / totalFeedbacks) * 100);
  };

  const positivePersentage =
    totalFeedbacks > 0
      ? countPositiveFeedbackPercentage(totalFeedbacks, positiveFeedbacks)
      : 0;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedbacks !== 0 ? (
          <Statictics
            feedbacks={Object.keys(feedbacks)}
            stats={feedbacks}
            totalFeedbacks={totalFeedbacks}
            positivePersentage={positivePersentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Container>
  );
};
