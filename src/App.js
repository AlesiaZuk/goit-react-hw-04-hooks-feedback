import { useState } from "react";

import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

const sectionClass = ["section"];

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onFeedback(e) {
    switch (e.target.name) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return (good * 100) / countTotalFeedback();
  }

  return (
    <section className={sectionClass}>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={"good"}
          onLeaveFeedback={onFeedback}
        ></FeedbackOptions>

        <FeedbackOptions
          options={"neutral"}
          onLeaveFeedback={onFeedback}
        ></FeedbackOptions>

        <FeedbackOptions
          options={"bad"}
          onLeaveFeedback={onFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title={"Statistics"}>
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={Math.round(countPositiveFeedbackPercentage())}
          ></Statistics>
        )}
      </Section>
    </section>
  );
}

export default App;
