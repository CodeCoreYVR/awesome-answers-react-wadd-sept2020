import React, {useContext} from 'react';
import { QuestionShowContext } from './QuestionShowPage';

export const AnswerDetails = props => {
  const deleteAnswer = useContext(QuestionShowContext);
    return(
      <div className="ui clearing segment">
        <div className="ui header">{props.body}</div>
        <div>By {props.author_full_name? props.author_full_name : null}</div>
        <div>Answered at: {props.created_at}</div>
        <button className="ui right floated small red button"onClick={() => deleteAnswer(props.id)}>Delete</button>
      </div>
    )
}

