import React from 'react'
import FormErrors from './FormErrors';

const NewQuestionForm = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const params = {
            title: formData.get('title'),
            body: formData.get('body')
        }
        props.createQuestion(params);
    }

    

    return(
        <form className="ui form clearing segment" onSubmit={handleSubmit}>
            <h1>New Question</h1>
            <div className="field">
                <label htmlFor="title">Title</label>
                <input 
                name="title" 
                id="title" 
                />
                <FormErrors forField="title" errors={props.errors}/>
            </div>
            <div className="field">
                <label htmlFor="body">Body</label>
                <input 
                name="body" 
                id="body" 
                />
                <FormErrors forField="body" errors={props.errors}/>
            </div>
            <div>
                <input className="ui right floated large orange button" type="submit" value="Submit"/>
            </div>
        </form>
    )
}


export default NewQuestionForm;