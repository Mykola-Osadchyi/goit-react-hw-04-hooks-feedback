import { useState } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import FeedbackOptions from './components/Feedbacks/FeedbackOptions';
import Statistics from './components/Feedbacks/Statistics';
import Notification from './components/Notification/Notification';

const feedbackBtn = [
  { id: 'btn-1', name: 'Good' },
  { id: 'btn-2', name: 'Neutral' },
  { id: 'btn-3', name: 'Bad' },
];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = event => {
    const statValue = event.target.innerHTML.toLowerCase();
    switch (statValue) {
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

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackBtn}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
}
