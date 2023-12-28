import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notifications/Notifications";


export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onBtnClick = e => {
    this.setState((prevState) => {
      return { [e.target.name]: prevState[e.target.name] + 1}
    })
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = (good + neutral + bad);
    const positivePercentage = ((good / totalFeedback) * 100).toFixed(0);
    return (
      <div>
        <Section title="Please leave feedback"> 
          <FeedbackOptions
            options={Object.keys(this.state) }
            onLeaveFeedback={this.onBtnClick}>
          </FeedbackOptions>
        </Section>
        
        <Section title="Statistics">
          {totalFeedback > 0 ?
            (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
              positivePercentage={positivePercentage} />)
            :
            (<Notification message='There is no feedback' />)}
        </Section>
    
    </div>
  );
  }
};
