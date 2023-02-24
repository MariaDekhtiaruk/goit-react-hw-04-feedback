import './App.css';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import { useState } from 'react';
import Section from 'components/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onLeaveFeedbackHandler = feedback => {
    console.log(feedback);
    const feedbackHandlerMap = {
      good: () => setGood(good + 1),
      neutral: () => setNeutral(neutral + 1),
      bad: () => setBad(bad + 1),
    };

    feedbackHandlerMap[feedback]();
  };

  return (
    <div className="App">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedbackHandler}
        />
      </Section>

      <Section title={'Statictics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}
