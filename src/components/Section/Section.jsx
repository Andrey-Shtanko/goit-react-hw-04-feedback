import PropTypes from 'prop-types';
import { Text } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      <Text>{title}</Text>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
