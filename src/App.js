import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import QuestionShowPage from './components/QuestionShowPage';
import {QuestionIndexPage} from './components/QuestionIndexPage';
import CurrentDateTime from './components/CurrentDateTime';
import { User} from './requests';
import Navbar from './components/Navbar';
import NewQuestionPage from './components/NewQuestionPage';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';

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
      clocksCount: true,
      user: null,
    }
  }

  componentDidMount(){
    this.getCurrentUser()
  }

  getCurrentUser = () => {
    return User.current().then(user => {
      // This is the safe navigation operator
      // Similar to use && user.id
      if(user?.id){
        this.setState(state => {
          return { user }
        })
      }
    })
  }

  onSignOut = () => {
    this.setState({
      user: null
    })
  }


  render(){
    return(
      <div className="container">
        <BrowserRouter>
          <Navbar 
          currentUser={this.state.user} 
          onSignOut={this.onSignOut}
          clocksCount={this.state.clocksCount}
          />
          <Switch>
            <Route 
            exact 
            path='/sign_in'
            // Anytime we need to want to render a component that requires some props and also
            // that component is being rendered by Route component then the way to pass props
            // is to use the "render" prop.
            // It takes a function as an argument and the function returns the component with
            // the props passed to it. "routeProps" represents all the routing props, make sure
            // to pass them to the component as well.
            render={ (routeProps) => <SignInPage {...routeProps} onSignIn={this.getCurrentUser} /> }/>
            <Route
            exact
            path='/sign_up'
            render={ (routeProps) => <SignUpPage {...routeProps} onSignUp={this.getCurrentUser} /> }/>
            <Route exact path='/questions'> 
              <QuestionIndexPage />
            </Route>
            <AuthRoute
            // The !! turns something 'truthy' or 'falsy' to true and false.
              isAuthenticated={!!this.state.user}
              exact
              path='/questions/new'
              component={NewQuestionPage}
            />
            <Route exact path='/questions/:id' component={QuestionShowPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;
