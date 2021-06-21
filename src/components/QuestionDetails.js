import React from 'react';

export const QuestionDetails = props => {
  console.log(props)
  return (
    <div>
        <h2>{props.title}</h2>
        <p
        style={{
          fontStyle: 'Roboto',
          fontSize: '24px'
          }}
        >{props.body}</p>
        <p>By {props.author && props.author.full_name}</p>
        <div>
          <small>View Count: {props.view_count}</small>
          <small
          style={{ marginLeft: '20px' }}
          >Asked {props.created_at}</small>
        </div>
      </div>
  );
 };
 
