import { Button, ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(feedback => (
        <li key={feedback}>
          <Button onClick={() => onLeaveFeedback(feedback)}>{feedback}</Button>
        </li>
      ))}
    </ButtonsList>
  );
};
