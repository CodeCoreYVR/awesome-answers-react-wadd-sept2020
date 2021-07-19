import React from 'react';

export const QuestionDetails = props => {
  console.log(props)
  return (
    <div>
        <h2 className="ui header">{props.title}</h2>
        <p>{props.body}</p>
        <div className="author">By {props.author && props.author.full_name}</div>
        <div className="rating">Viewed {props.view_count} times</div>
        <div className="date">Asked at: {props.created_at}</div>
    </div>
  );
 };
 
