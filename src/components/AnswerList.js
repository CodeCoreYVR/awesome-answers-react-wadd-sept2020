import React from 'react';
import AnswerDetails from './AnswerDetails';
// import answers from '../data/answers'

// Our answers from '../data/answers' use a Date object
// for each answer's "created_at". We can't render JS objects
// as children, therefore we convert it to a string using 
// toLocaleString()
function AnswerList({answers, deleteAnswer}) {
  return (
    <div>
      {answers.map(({ body, author, created_at, id }, index) => (
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

export default AnswerList