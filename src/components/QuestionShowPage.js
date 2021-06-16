import React, {useState, useEffect} from 'react';
import {QuestionDetails} from './QuestionDetails';
import AnswerList from './AnswerList';
import {Question} from '../requests'

const QuestionShowPage = props => {
  const [questionShow, setQuestionShow] = useState();
  
  const deleteQuestion = () => {
    Question.destroy(questionShow.question.id).then(data => {
      props.history.push("/questions");
    });
  };
  
  const deleteAnswer = id => {
    const newAnswers = questionShow.question.answers.filter(a => a.id !== id);
    setQuestionShow({
      ...questionShow,
      question: { ...questionShow.question, answers: newAnswers }
    });
  };
  
  useEffect(() => {
    Question.show(props.match.params.id).then(question => {
      setQuestionShow(question);
    });
  }, []);
  
  return (
    <main>
        <QuestionDetails {...questionShow} />
        <button onClick={() => deleteQuestion()}>Delete</button>
        {questionShow && questionShow.id && questionShow.answers?.length> 0 ?
        <AnswerList
        answers={questionShow?.answers}
        onAnswerDeleteClick={id => deleteAnswer(id)}
        /> : " "
        }
      </main>
  );
 };
  
 export default QuestionShowPage; 
