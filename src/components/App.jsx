import {  useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notifications/Notifications";


export const App = () => {
  
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

  const onBtnClick = e => {
    const option = e.target.name;
    setFeedback((prevFeedback) => (
      { ...prevFeedback, [option]: prevFeedback[option] + 1 }
    ))
  }
  
  // const totalFeedback = (feedback.good + feedback.neutral + feedback.bad);
  const totalFeedback = Object.values(feedback).reduce((acc, elem) => (acc + elem), 0) //на случай если будет много элементов в массиве
  const positivePercentage = totalFeedback>0 ? ((feedback.good / totalFeedback) * 100).toFixed(0) : 0;

    return (
      <>
        <Section title="Please leave feedback"> 
          <FeedbackOptions
            options={Object.keys(feedback) }
            onLeaveFeedback={onBtnClick}>
          </FeedbackOptions>
        </Section>
        
        <Section title="Statistics">
          {totalFeedback > 0 ?
            (<Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
              positivePercentage={positivePercentage} />)
            :
            (<Notification message='There is no feedback' />)}
        </Section>
    
    </>
  );
};