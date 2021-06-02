import React from 'react';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import AnswerList from './components/AnswerList';


// Whenever you use JSX in a file, you must import React.
// Otherwise, when JSX converts to React.createElement,
// "React" will be undefined.




// We create a component that acts as the root element of all our other components.
// This is the component that will be rendered using ReactDOM.
function App(){
  return(
    <div className="container">
      <QuestionIndexPage />
      <QuestionShowPage />
      <AnswerList/>
    </div>
  )
}


export default App;
