import { ButtonsList } from './Buttons.styled';

export const Buttons = ({ feedbacks, onHandleIncrement }) => {
  return (
    <ButtonsList>
      {feedbacks.map(feedback => (
        <li key={feedback}>
          <button onClick={() => onHandleIncrement(feedback)}>
            {feedback}
          </button>
        </li>
      ))}
    </ButtonsList>
  );
};
