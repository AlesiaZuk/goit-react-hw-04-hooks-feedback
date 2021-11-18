import { Component } from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

const sectionClass = ["section"];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedback = (e) => {
    const { name } = e.target;

    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;

    return (good * 100) / this.countTotalFeedback();
  }

  render() {
    return (
      <section className={sectionClass}>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={"good"}
            onLeaveFeedback={this.onFeedback}
          ></FeedbackOptions>

          <FeedbackOptions
            options={"neutral"}
            onLeaveFeedback={this.onFeedback}
          ></FeedbackOptions>

          <FeedbackOptions
            options={"bad"}
            onLeaveFeedback={this.onFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title={"Statistics"}>
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={Math.round(
                this.countPositiveFeedbackPercentage()
              )}
            ></Statistics>
          )}
        </Section>
      </section>
    );
  }
}

export default App;
