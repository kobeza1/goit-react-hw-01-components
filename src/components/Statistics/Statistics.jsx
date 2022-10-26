import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatsList,
  StatsItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Title className="title">{title}</Title>}
      <StatsList className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id}>
              <Label className="label">{label}</Label>
              <Percentage className="percentage">{percentage}%</Percentage>
            </StatsItem>
          );
        })}
      </StatsList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
