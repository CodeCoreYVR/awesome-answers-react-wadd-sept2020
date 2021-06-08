import React, {Component} from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerDetails from './AnswerDetails';
import AnswerList from './AnswerList';
import questionData from '../data/questionData'


// To compose our application, we will create components that nest other components.
// Just as a function in JS can return only a single value, such as an object
// you can only return one call to React.createElement() or one JSX element from a component.
// However, you can nest as many components inside as you want, just like how you can nest
// as many objects as you want inside of the object you return.

class QuestionShowPage extends Component {
  constructor(props){
    super(props);
    this.state = questionData
  }
  render(){
    const { title, body, author, view_count, created_at, answers } = this.state
    return(
      <main>
        <QuestionDetails 
        title={title}
        body={body}
        author={author}
        view_count={view_count}
        created_at={created_at}
        />
        <AnswerList
        answers={answers}
        />
        <AnswerDetails 
        body="White"
        author={{ full_name: "Steve Jobs"}}
        created_at={new Date().toLocaleString()}
        />
      </main>
    )
  }
}

export default QuestionShowPage;