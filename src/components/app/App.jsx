import { useState} from 'react';
import { SectionWrap } from '../section/SectionWrap';
import { Statistics } from '../statistics/Statistics';
import { FeedbackOptions } from '../feedback/FeedbackOptions';
import { Notification } from '../notification/Notification';
import { Container } from './App.styled';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
      return Math.floor(good * 100 / countTotalFeedback());
  }

  const  onLeaveFeedback = (evt) => {
    const stateName = evt.target.textContent;

    switch (stateName) {

      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  }

  const options = Object.keys({ good, neutral, bad });

  return (
    <Container>
      <SectionWrap title="Please leave feedback">
           <FeedbackOptions
             options={options}
             onLeaveFeedback={onLeaveFeedback}
           />
      </SectionWrap>
         <SectionWrap title="Statistics">
        {countTotalFeedback() ? 
       
           <Statistics
             good={good}
             neutral={neutral}
             bad={bad}
             total={countTotalFeedback()}
             positivePercentage={countPositiveFeedbackPercentage()} />
         
            : <Notification message="There is no feedback"/>}
      </SectionWrap>
    </Container>
  );
};
