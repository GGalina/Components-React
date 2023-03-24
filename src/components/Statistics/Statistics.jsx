import PropTypes from 'prop-types';
import {
  StatisticsBlock,
  Title,
  List,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';

function Statistics({ title, stats }) {
    return (
    <StatisticsBlock>
        {title ? <Title>Upload stats</Title> : ''}

        <List>
            {stats.map(({ id, label, percentage }) => (
                <ListItem key={id}>
                    <Label>{label}</Label>
                    <Percentage>{percentage} %</Percentage>
                </ListItem>
            ))}            
        </List>
    </StatisticsBlock>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
  }))
};

export default Statistics;