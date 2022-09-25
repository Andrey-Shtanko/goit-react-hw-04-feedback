import { Text } from './../Title/Title.styled';
export const Statictics = ({ feedbacks, stats }) => {
  return (
    <div>
      <Text>Statistics</Text>
      {feedbacks.map(feedback => {
        return (
          <p key={feedback}>
            {feedback}: <span>{stats[feedback]}</span>
          </p>
        );
      })}
    </div>
  );
};
