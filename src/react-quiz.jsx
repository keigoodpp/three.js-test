import React from 'react';
import quizData from './quizdata';

class QuizComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
    };
  }

  render() {
    const questionData = quizData[this.state.currentQuestion];
    return (
      <div>
        <h2>{questionData.question}</h2>
        {questionData.options.map((option, index) => (
          <div key={index}>
            <input type="radio" id={`option-${index}`} name="option" value={option} />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default QuizComponent;