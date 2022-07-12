import PropTypes from 'prop-types';
import {FeedbackWrap,  Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackWrap>
            {options.map(option => (
                <Button key={option} type="button" onClick={onLeaveFeedback}>
                    {option}
                </Button>
            ))}
        </FeedbackWrap>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),
}