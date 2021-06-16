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
 


// A React component is a function that returns a React element,
// which are created with React.createElement() or JSX tags.
// Our components' names must be in PascalCase, otherwise, it will
// look for an plain HTML tag when we use it.
// function QuestionDetails({ title, body, author, view_count, created_at }){
//     return(
//       <div>
//         <h2>{title}</h2>
//         <p
//         style={{
//           fontStyle: 'Roboto',
//           fontSize: '24px'
//         }}
//         >{body}</p>
//         <p>By: {author? author.full_name : null}</p>
//         <div>
//           <small>View Count: {view_count}</small>
//           <small
//           style={{ marginLeft: '20px'}}
//           >Asked {created_at}</small>
//         </div>
//       </div>
//     )
//   }

//   export default QuestionDetails;