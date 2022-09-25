import { Text } from './../Title/Title.styled';
import { Feedback } from './Statistics.styled';
export const Statictics = ({ feedbacks, stats }) => {
  return (
    <div>
      <Text>Statistics</Text>
      {feedbacks.map(feedback => {
        return (
          <Feedback key={feedback}>
            {feedback}: <span>{stats[feedback]}</span>
          </Feedback>
        );
      })}
    </div>
  );
};
