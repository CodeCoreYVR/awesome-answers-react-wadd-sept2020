import React from 'react';
import {AnswerDetails} from './AnswerDetails';

    
function AnswerList(props){
const answers = props.answers
    return(
        <div>
            <h2>Answers</h2>
                {props.answers.map(answer => (
                    <AnswerDetails
                    key={answer.id}
                    {...answer}
                    />
                ))}
        </div>
    )
}

export default AnswerList;