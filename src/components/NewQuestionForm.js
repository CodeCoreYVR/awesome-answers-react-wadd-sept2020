import React from 'react'

const NewQuestionForm = ({createQuestion}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const params ={
            title: formData.get('title'),
            body: formData.get('body')
        }
        createQuestion(params)
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>New Question</h1>
            <div>
                <label htmlFor="title">Title</label>
                <br/>
                <input name="title" id="title"/>
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <br/>
                <input name="body" id="body"/>
            </div>
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}


export default NewQuestionForm;