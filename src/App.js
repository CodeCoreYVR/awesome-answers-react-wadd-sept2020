import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import CurrentDateTime from './components/CurrentDateTime';
import {Session} from './requests';
import Navbar from './components/Navbar';
import NewQuestionPage from './components/NewQuestionPage'

// Whenever you use JSX in a file, you must import React.
// Otherwise, when JSX converts to React.createElement,
// "React" will be undefined.

// We create a component that acts as the root element of all our other components.
// This is the component that will be rendered using ReactDOM.


{/* <QuestionIndexPage />
<QuestionShowPage /> */}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      clocksCount: [1],
      user: null
    }
  }

  componentDidMount(){
    Session.create({
      email: 'js@winterfell.gov',
      password: 'supersecret'
    }).then(user => {
      this.setState((state) => {
        return {
          user: user
        }
      })
    })
  }


  render(){
    return(
      <div className="container">
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path='/questions'> 
              <QuestionIndexPage />
            </Route>
            <Route exact path='/questions/new' component={NewQuestionPage}/>
            <Route exact path='/questions/:id' component={QuestionShowPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;
