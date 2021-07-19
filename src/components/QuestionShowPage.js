import React, {useState, useEffect} from 'react';
import {QuestionDetails} from './QuestionDetails';
import AnswerList from './AnswerList';
import {Question} from '../requests'

export const QuestionShowContext = React.createContext(); 

const QuestionShowPage = props => {
  const [questionShow, setQuestionShow] = useState({});
  
  const deleteQuestion = () => {
    Question.destroy(questionShow.question.id).then(data => {
      props.history.push("/questions");
    });
  };
  
  const deleteAnswer = id => {
    setQuestionShow((state) => {
      const questionCopy = JSON.parse(JSON.stringify(state));
      const newAnswers = questionCopy.answers.filter((currentAnswer) => {
        return currentAnswer.id !== id;
      })
      questionCopy.answers = newAnswers;
      return questionCopy
    })
  };
  
  useEffect(() => {
    Question.show(props.match.params.id).then(question => {
      setQuestionShow(question);
    });
  }, []);
  
  return (
    <main>
        <div className="ui teal clearing segment">
          <QuestionDetails {...questionShow} />
          <button className="ui right floated red button" onClick={() => deleteQuestion()}>Delete</button>
        </div>
        <QuestionShowContext.Provider value={deleteAnswer}>
        {questionShow && questionShow.id && questionShow.answers?.length> 0 ?
        <AnswerList
        answers={questionShow?.answers}
        onAnswerDeleteClick={id => deleteAnswer(id)}
        /> : " "
        }
        </QuestionShowContext.Provider>
      </main>
  );
 };
  
 export default QuestionShowPage; 
