import React from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerDetails from './AnswerDetails';
import AnswerList from './AnswerList';


// To compose our application, we will create components that nest other components.
// Just as a function in JS can return only a single value, such as an object
// you can only return one call to React.createElement() or one JSX element from a component.
// However, you can nest as many components inside as you want, just like how you can nest
// as many objects as you want inside of the object you return.
function QuestionShowPage(){
    return(
      <main>
        <QuestionDetails 
        title="What is your favourite colour?"
        body="Red, Blue, Pink, etc..."
        author={{ full_name: "Mark Zuckerberg"}}
        view_count={100}
        created_at={new Date().toLocaleString()}
        />
        <AnswerDetails 
        body="White"
        author={{ full_name: "Steve Jobs"}}
        created_at={new Date().toLocaleString()}
        />
      </main>
    )
  }

  export default QuestionShowPage;