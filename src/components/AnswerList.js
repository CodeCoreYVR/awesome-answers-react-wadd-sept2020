import React from 'react';
import AnswerDetails from './AnswerDetails'
// import answers from '../data/answers'

function AnswerList({answers, deleteAnswer}){
    return(
        <div>
            {answers.map( ({ body, author, created_at, id}, index) => (
                    <AnswerDetails 
                    key={index}
                    id={id}
                    body={body}
                    author={author}
                    created_at={created_at.toLocaleString()}
                    deleteAnswer={deleteAnswer}
                    />
                ))}
        </div>
    )
}

export default AnswerList;