import React from 'react';
import { User } from '../requests';

const SignUpPage = (props) => {
    const { onSignUp } = props
    const handleSubmit = (event) => {
        const {currentTarget} = event
        event.preventDefault()
        const formData = new FormData(currentTarget)
        const params = {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation'),
        }
        User.create(params).then(res => {
            if(res?.id){
                onSignUp() // Store user in App state

                props.history.push('/questions') // Navigate to index page
            }
        })
    }
    return(
        <main>
            <h1 className="ui horizontal divider">Sign Up</h1>
            <form className="ui form clearing segment" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="first_name" id="first_name" />
                </div> 
                <div className="field">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name" id="last_name" />
                </div> 
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div> 
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div> 
                <div className="field">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" />
                </div> 
                <input className="ui right floated large orange button" type="submit" value="Sign Up" />               
            </form>
        </main>
    )
}


export default SignUpPage;

