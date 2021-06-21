import React from 'react'

const NewQuestionForm = ({createQuestion, newQuestionData, updateQuestionData}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        createQuestion();
    }

    function handleQuestionInput(event){
        const {value, name} = event.currentTarget
        updateQuestionData({[name]: value})
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
                value={newQuestionData.title}
                onChange={handleQuestionInput}
                />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <br/>
                <input 
                name="body" 
                id="body" 
                value={newQuestionData.body} 
                onChange={handleQuestionInput}/>
            </div>
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}


export default NewQuestionForm;