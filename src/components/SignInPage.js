import React, { useState } from 'react'
import { Session } from '../requests'

const SignInPage = props => {
  const [errors, setErrors] = useState([])

    const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget: form} = event;
    const formData = new FormData(form)

    
    
    Session.create({
      email: formData.get('email'),
      password: formData.get('password'),
    }).then(data => {
      if (data.status === 404){
        setErrors([...errors, {message: "Wrong Email or Password"}]);
      } else {
        props.history.push('/');
        if(typeof props.onSignIn === "function"){
          props.onSignIn();
        }
      }
    });
  };

  return (
    <main>
      <h1 className="ui horizontal divider">Sign In</h1>
      <form className="ui form clearing segment" onSubmit={handleSubmit}>
        {errors.length > 0 ? (
          <div>
            <div>Failed to Sign In</div>
            <p>{errors.map(error => error.message).join(", ")}</p>
          </div>
        ) : (
          ""
        )}
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <input className="ui right floated large blue button" type="submit" value="Sign In" />
      </form>
    </main>
  )
}

export default SignInPage