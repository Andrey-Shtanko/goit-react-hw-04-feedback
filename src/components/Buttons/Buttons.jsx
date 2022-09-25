import { Button, ButtonsList } from './Buttons.styled';

export const Buttons = ({ feedbacks, onHandleIncrement }) => {
  return (
    <ButtonsList>
      {feedbacks.map(feedback => (
        <li key={feedback}>
          <Button onClick={() => onHandleIncrement(feedback)}>
            {feedback}
          </Button>
        </li>
      ))}
    </ButtonsList>
  );
};
