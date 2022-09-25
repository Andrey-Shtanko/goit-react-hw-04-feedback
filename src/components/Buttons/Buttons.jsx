import { ButtonsList } from './Buttons.styled';

export const Buttons = ({ feedbacks }) => {
  return (
    <ButtonsList>
      {feedbacks.map(button => (
        <li key={button}>
          <button>{button}</button>
        </li>
      ))}
    </ButtonsList>
  );
};
