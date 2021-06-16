import React, {useState, useEffect} from 'react';
import {QuestionDetails} from './QuestionDetails';
import AnswerList from './AnswerList';
// import questionData from '../data/questionData'
import {Question} from '../requests'

// Move QuestionShowPage component into a function component, and make sure to use both hooks,
// useState and useEffect if necessary.

const QuestionShowPage = props => {
  const [questionShow, setQuestionShow] = useState();
  
  const deleteQuestion = () => {
    Question.destroy(questionShow.question.id).then(data => {
      props.history.push("/questions");
    });
  };
  
  const deleteAnswer = id => {
    const newAnswers = questionShow.question.answers.filter(a => a.id !== id);
    setQuestionShow({
      ...questionShow,
      question: { ...questionShow.question, answers: newAnswers }
    });
  };
  
  useEffect(() => {
    Question.show(props.match.params.id).then(question => {
      setQuestionShow(question);
    });
  }, []);
  
  return (
    <main>
        <QuestionDetails {...questionShow} />
        <button onClick={() => deleteQuestion()}>Delete</button>
        {questionShow && questionShow.id && questionShow.answers?.length> 0 ?
        <AnswerList
        answers={questionShow?.answers}
        onAnswerDeleteClick={id => deleteAnswer(id)}
        /> : " "
        }
      </main>
  );
 };
  
 export default QuestionShowPage; 



// To compose our application, we will create components that nest other components.
// Just as a function in JS can return only a single value, such as an object
// you can only return one call to React.createElement() or one JSX element from a component.
// However, you can nest as many components inside as you want, just like how you can nest
// as many objects as you want inside of the object you return.

// class QuestionShowPage extends Component {
//   constructor(props){
//     super(props);
//     this.state = { question : {} }
//     this.deleteAnswer = this.deleteAnswer.bind(this)
//   }

//   componentDidMount(){
//     Question.show(this.props.match.params.id)
//     .then((question) => {
//       this.setState((state) => {
//         return {
//           question: question
//         }
//       })
//     })
//   }

//   deleteAnswer(id){
//     this.setState((state) => {
//       return {
//         answers: state.answers.filter(a => a.id !== id)
//       }
//     })
//   }


//   render(){
//     const { title, body, author, view_count, created_at } = this.state.question
//     return(
//       <main>
//         <QuestionDetails 
//         title={title}
//         body={body}
//         author={author}
//         view_count={view_count}
//         created_at={created_at}
//         />
//         <AnswerList
//         answers={this.state.answers}
//         deleteAnswer={this.deleteAnswer}
//         />
//       </main>
//     )
//   }
// }

// export default QuestionShowPage;