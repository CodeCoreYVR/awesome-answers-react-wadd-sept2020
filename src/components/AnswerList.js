import React from "react";
import AnswerDetails from './AnswerDetails';
const AnswerList = ({answers}) => {
  return (
      <>
           {answers?answers.map((a, i) => {
        return <AnswerDetails
          key={i}
          id={a.id}
          body={a.body}
          author={a.author}
          created_at={a.created_at}
        />
      }):''}
      </>
  );
};
export default AnswerList
