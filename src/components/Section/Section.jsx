import { Text } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      <Text>{title}</Text>
      {children}
    </section>
  );
};
