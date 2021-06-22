import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import QuestionShowPage from './components/QuestionShowPage';
import {QuestionIndexPage} from './components/QuestionIndexPage';
import CurrentDateTime from './components/CurrentDateTime';
import { Session, User} from './requests';
import Navbar from './components/Navbar';
import NewQuestionPage from './components/NewQuestionPage';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import NotFoundPage from './components/NotFoundPage';

 
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
   <div className="container">
     <BrowserRouter>
       <Navbar
       currentUser={appState.user}
       onSignOut={onSignOut}
       clocksCount={appState.clocksCount}
       />
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
     </BrowserRouter>
   </div>
 )
}
 
export default App;
