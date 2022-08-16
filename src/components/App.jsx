import React, { useState } from 'react';
import { Section } from './SectionTitle/SectionTitle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { StatisticsList } from './Statistics/Statistics';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbacks = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedbacks = total => {
    return (total = good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedbacks()) * 100);
  };

  const FeedbacksNames = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={FeedbacksNames}
          onLeaveFeedback={handleFeedbacks}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedbacks() !== 0 ? (
          <StatisticsList
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedbacks()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
