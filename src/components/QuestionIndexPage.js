import React, {useState, useEffect} from 'react';
import {Question} from '../requests';
import {Link} from 'react-router-dom';

export const QuestionIndexPage = () => {
    const [questionIndex, setQuestionIndex] = useState({
        questions: [],
    });
     
    useEffect(() => {
        Question.index().then(questions => {
          setQuestionIndex({ questions });
        });
    }, []);
  
    return(
            <main className="Page">
                <h1 className="ui horizontal divider">Questions</h1>
                <ul className="ui list">
                {questionIndex.questions.map(question => (
                    <div className="ui segment" key={question.id}>
                        <Link className="item" to={`/questions/${question.id}`}>
                            <h3 className="ui header">{question.title}</h3>
                        </Link>
                    </div>
                ))}
                </ul>
            </main>
    )
 }
 