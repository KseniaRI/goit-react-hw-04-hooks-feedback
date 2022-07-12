import PropTypes from 'prop-types';
import { StatisticList , StatisticItem, StatisticValue } from './Statistics.styled';
import { CgSmile, CgSmileNone, CgSmileSad } from 'react-icons/cg';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return (
        <StatisticList>
            <StatisticItem>
                <CgSmile size={40} color="green"/> Good:
                <StatisticValue>{good}</StatisticValue>
            </StatisticItem> 
            <StatisticItem>
                <CgSmileNone size={40} color="gray"/> Neutral:
                <StatisticValue>{neutral}</StatisticValue>
            </StatisticItem>
            <StatisticItem>
                <CgSmileSad size={40} color="red"/> Bad:
                <StatisticValue>{bad}</StatisticValue>
            </StatisticItem>
            <StatisticItem>
                Total:
                <StatisticValue>{total}</StatisticValue>
            </StatisticItem>
            <StatisticItem>
                Positive feedback:
                <StatisticValue>{positivePercentage} %</StatisticValue>
            </StatisticItem>
        </StatisticList>
      
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}