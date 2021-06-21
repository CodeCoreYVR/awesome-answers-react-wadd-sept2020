import React, {Component} from 'react';
import NewQuestionForm from './NewQuestionForm'
import {Question} from '../requests'

class NewQuestionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            newQuestionData: {
                title: '',
                body: '',
            }
        }
        this.createQuestion = this.createQuestion.bind(this)
        this.updateQuestionData = this.updateQuestionData.bind(this)
    }

    createQuestion() {
        Question.create(this.state.newQuestionData)
        .then(({id}) => {
            this.props.history.push(`/questions/${id}`);
        })
    }

    updateQuestionData(props) { // props will be an object {title: 'new value title'} | {body: 'new value body'}
        this.setState((state) => {
            console.log(props);
            console.log(state);
            if(state.newQuestionData.title.length > 10){
                alert('Title is too long')
            }
            return {
                newQuestionData: {
                    ...state.newQuestionData,
                    ...props
                }
            }
        })
    }

    render(){
        return(
            <div>
                <NewQuestionForm 
                createQuestion={this.createQuestion}
                newQuestionData={this.state.newQuestionData}
                updateQuestionData={this.updateQuestionData}
                />
          
            </div>
        )
    }

    
}


export default NewQuestionPage;