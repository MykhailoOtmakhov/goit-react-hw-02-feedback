import React, { Component } from 'react';
import Section from './components/Section/Section'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification'
export default class App extends Component {
  static defaultProps = {}

  state={
  good: 0,
  neutral: 0,
  bad: 0,
  } 
  
  addPoint=key=>{
    this.setState(state=>{
      return{       
        [key]:state[key]+1,
      }
    })
  }

  countTotalFeedback=()=>{ 
      const total = Object.values(this.state).reduce((acc,value)=>acc+value, 0);
      return total;
  }   

  countPositiveFeedbackPercentage=()=>{
      const persentage = ((this.state.good/this.countTotalFeedback())*100).toFixed(2);
      return persentage > 0 ? persentage : 0;
  }

  render() {
      return(
        <div>
            <Section title="Please leave feedback">
              <FeedbackOptions 
                options={this.state} 
                onLeaveFeedback={this.addPoint} 
              />
            </Section>
            <Section title="Statistics">
              {this.countTotalFeedback()=== 0 
              ?
                <Notification message = "No feedback given"/>
              :
                <Statistics 
                good={this.state.good} 
                neutral={this.state.neutral} 
                bad={this.state.bad}
                total={this.countTotalFeedback} 
                positivePercentage = {this.countPositiveFeedbackPercentage}
                />
              }
            </Section>     
        </div>
      )
  }
}
