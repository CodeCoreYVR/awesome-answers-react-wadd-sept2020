import React, {useState, useEffect} from 'react';
import NewQuestionForm from './NewQuestionForm';
import {Question} from '../requests';
import {Link} from 'react-router-dom';

export const QuestionIndexPage = () => {
    const [questionIndex, setQuestionIndex] = useState({
        questions: [],
    });
     
    const deleteQuestion = id => {
        const newQuestionsList = questionIndex.questions.filter(q => q.id !== id);
        setQuestionIndex({ ...questionIndex, questions: newQuestionsList });
    };
  
  
    useEffect(() => {
        Question.index().then(questions => {
          setQuestionIndex({ questions });
        });
    }, []);
  
    return(
            <main>
                <h1>Questions</h1>
                <ul style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                }}>
                {questionIndex.questions.map(question => (
                    <li key={question.id}>
                        <Link to={`/questions/${question.id}`}>{question.id} - {question.title}</Link>
                        <button onClick={()=> deleteQuestion(question.id)}>Delete</button>
                    </li>
                ))}
                </ul>
            </main>
    )
 }
 