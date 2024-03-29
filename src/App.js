import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import QuestionShowPage from './components/QuestionShowPage';
import {QuestionIndexPage} from './components/QuestionIndexPage';
import { Session, User} from './requests';
import Navbar from './components/Navbar';
import NewQuestionPage from './components/NewQuestionPage';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import NotFoundPage from './components/NotFoundPage';
import { WelcomePage } from './components/WelcomePage';

 
const App = () => {
 const [appState, setAppState] = useState({
   clocksCount: true,
   user: null
 });
 
 const getCurrentUser = () => {
   User.current().then(data => {
     if (typeof data.id !== "number"){
       setAppState({ ...appState, user: null });
     } else {
       setAppState({...appState, user: data });
     }
   });
 }; 
 
 const onSignOut = () => {
   Session.destroy().then(setAppState({ ...appState, user: null}));
 };
 
 useEffect(() => {
   getCurrentUser();
 }, []);
 
 return (
   <BrowserRouter>
      <main className="App">
       <Navbar
       currentUser={appState.user}
       onSignOut={onSignOut}
       clocksCount={appState.clocksCount}
       />
       <div className="ui container">
          <Switch>
            <Route
            exact
            path='/sign_in'
            render={ routeProps => <SignInPage {...routeProps} onSignIn={getCurrentUser} /> }
            />
            <Route
            exact
            path='/sign_up'
            render={routeProps => <SignUpPage {...routeProps} onSignUp={getCurrentUser} />}
            />
            <Route exact path='/'>
              <WelcomePage />
            </Route>
            <Route exact path='/questions'>
              <QuestionIndexPage />
            </Route>
            <AuthRoute
              isAuthenticated={!!appState.user}
              exact
              path='/questions/new'
              component={NewQuestionPage}
            />
            <AuthRoute
            isAuthenticated={!!appState.user}
            exact
            path='/questions/:id'
            component={QuestionShowPage}
            />
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </main> 
    </BrowserRouter>
 )
}
 
export default App;
