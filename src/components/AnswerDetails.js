import React, {useContext} from 'react';
import { QuestionShowContext } from './QuestionShowPage';

export const AnswerDetails = props => {
  const deleteAnswer = useContext(QuestionShowContext);
    return(
      <div>
        <p
        style={{
          fontStyle: 'Roboto',
          fontSize: '12px'
        }}
        >{props.body}</p>
        <div>
          <small>By {props.author_full_name? props.author_full_name : null}</small>
          <small style={{ marginLeft: '20px'}}>Answered {props.created_at}</small>
          <button onClick={() => deleteAnswer(props.id)}>Delete</button>
          <br />
        </div>
      </div>
    )
}

