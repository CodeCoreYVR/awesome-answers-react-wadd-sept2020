import React, {useState, useEffect} from 'react';
// import questionsData from '../data/questionsData'
import NewQuestionForm from './NewQuestionForm';
import {Question} from '../requests';
import {Link} from 'react-router-dom';

//This makes QuestionIndexPage a functional component and use both useState 
// and useEffect hooks to manage state and make API calls.

export const QuestionIndexPage = () => {
    const [questionIndex, setQuestionIndex] = useState({
        questions: [],
    });
     
    const deleteQuestion = id => {
        const newQuestionsList = questionIndex.questions.filter(q => q.id !== id);
        setQuestionIndex({ ...questionIndex, questions: newQuestionsList });
    };
  
  
    useEffect(() => {
        Question.index().then(questions => {
          setQuestionIndex({ questions });
        });
    }, []);
  
    return(
            <main>
                <h1>Questions</h1>
                <ul style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                }}>
                {questionIndex.questions.map(question => (
                    <li key={question.id}>
                        <Link to={`/questions/${question.id}`}>{question.id} - {question.title}</Link>
                        <button onClick={()=> deleteQuestion(question.id)}>Delete</button>
                    </li>
                ))}
                </ul>
            </main>
    )
 }
 

// We use map to return an array of React elements(created using JSX here)
// Inside of {}, React will render that list of items.
// Each React element has to have a unique 'key' prop.

// Note that we are returning the element from the callback
// in map using "()", indicating that we are returning 
// the multicode from the arrow function.


// class QuestionIndexPage extends Component{
//     constructor(props){
//         super(props);
//         this.state = { questions: [] } // Like { key: value }
//         this.createQuestion = this.createQuestion.bind(this)
//     }

//     componentDidMount(){
//         Question.index()
//         .then((questions) => {
//             this.setState((state) => {
//                 return {
//                     questions: questions
//                 }
//             })
//         })
//     }

//     createQuestion(params){
//         //Update the list of questions within our state by adding a new question to the list
//         this.setState((state) => {
//             return {
//                 questions: [ // array of questions
//                     ...state.questions,
//                     {
//                         //Then copy the previous list of questions from our state into this new array
//                         // following the newly created question
//                         id: Math.max(...state.questions.map(q => q.id)) + 1, // array of all the question ids
//                         ...params // params of the question form
//                     },
//                     ...state.questions
//                 ]
//             }
//         })
//     }

//     deleteQuestion(id){
//         this.setState((state) => {
//             return {
//                 questions: state.questions.filter(q => q.id !== id)
//             }
//         })
//     }



//     render(){
//         return(
//             <main>
//                 <h1>Questions</h1>
//                 <ul style={{
//                     listStyle: 'none',
//                     paddingLeft: 0,
//                 }}>
//                     {this.state.questions.map( ({ id, title}) => (
//                         <li key={id}>
//                             <Link to={`/questions/${id}`}>{id} - {title}</Link>
//                             <button onClick={() => this.deleteQuestion(id)}>Delete</button>
//                         </li>
//                     ))}
//                 </ul>
//             </main>
//         )
//     }
// }

// export default QuestionIndexPage;