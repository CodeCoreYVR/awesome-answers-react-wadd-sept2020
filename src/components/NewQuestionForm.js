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
        <form onSubmit={handleSubmit}>
            <h1>New Question</h1>
            <div>
                <label htmlFor="title">Title</label>
                <br/>
                <input 
                name="title" 
                id="title" 
                />
                <FormErrors forField="title" errors={props.errors}/>
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <br/>
                <input 
                name="body" 
                id="body" 
                />
                <FormErrors forField="body" errors={props.errors}/>
            </div>
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}


export default NewQuestionForm;