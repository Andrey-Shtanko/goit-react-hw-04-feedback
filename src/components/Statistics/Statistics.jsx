import PropTypes from 'prop-types';
import { Feedback, Total, Percentage } from './Statistics.styled';

export const Statictics = ({
  feedbacks,
  stats,
  totalFeedbacks,
  positivePersentage,
}) => {
  return (
    <div>
      {feedbacks.map(feedback => {
        return (
          <Feedback key={feedback}>
            {feedback}: <span>{stats[feedback]}</span>
          </Feedback>
        );
      })}
      <Total>
        Total: <span>{totalFeedbacks}</span>
      </Total>
      <Percentage>
        Positive feedbacks: <span>{positivePersentage}</span>%
      </Percentage>
    </div>
  );
};

Statictics.propTypes = {
  feedbacks: PropTypes.array.isRequired,
  stats: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  totalFeedbacks: PropTypes.number.isRequired,
  positivePersentage: PropTypes.number.isRequired,
};
