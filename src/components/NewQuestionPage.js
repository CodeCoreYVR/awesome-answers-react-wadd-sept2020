import React, {Component} from 'react';
import NewQuestionForm from './NewQuestionForm'
import {Question} from '../requests'

class NewQuestionPage extends Component {
    constructor(props){
        super(props);
        this.state = { errors: []}
        this.createQuestion = this.createQuestion.bind(this);
    }

    createQuestion(params) {
        Question.create(params)
        .then((question) => {
            if(question.errors){
                this.setState({errors: question.errors});
            } else {
                this.props.history.push(`/questions/${question.id}`);
            }
        })
    }

    

    render(){
        return(
            <div>
                <NewQuestionForm 
                createQuestion={this.createQuestion}
                errors={this.state.errors}
                />
          
            </div>
        )
    }

    
}


export default NewQuestionPage;