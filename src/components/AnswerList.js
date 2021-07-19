import React from 'react';
import {AnswerDetails} from './AnswerDetails';

    
function AnswerList(props){
const answers = props.answers
    return(
        <div>
            <h2 className="ui horizontal divider header">Answers</h2>
            <div className="ui segment">
                {props.answers.map(answer => (
                    <AnswerDetails
                    key={answer.id}
                    {...answer}
                    />
                ))}
            </div>
        </div>
    )
}

export default AnswerList;