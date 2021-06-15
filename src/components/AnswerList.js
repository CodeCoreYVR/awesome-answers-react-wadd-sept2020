import React from 'react';
import AnswerDetails from './AnswerDetails'
// import answers from '../data/answers'

function AnswerList(props, deleteAnswer){
    const answers = props.answers
    return(
        <div>
            
            {
            answers?
            answers.map( ({ body, author, created_at, id}, index) => (
                    <AnswerDetails 
                    key={index}
                    id={id}
                    body={body}
                    author={author}
                    created_at={created_at.toLocaleString()}
                    deleteAnswer={deleteAnswer}
                    />
                ))
            :
            null
            }
        </div>
    )
}

export default AnswerList;