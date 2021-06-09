import React, {Component} from 'react';

class CurrentDateTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
        console.log('1 Constructor fired')
    }

    componentDidMount(){
        console.log('3 componentDidMount')
        this.intervalId = setInterval(() => {
            this.setState((state) => {
                return {
                    date: new Date()
                }
            })
        }, 1000)
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.intervalId)
    }

    render(){
        console.log('2 Render fired')
        return(
            <div>
                {
                    this.props.shouldShowTime ?
                    this.state.date.toLocaleTimeString()
                    :
                    this.state.date.toLocaleDateString()
                }
            </div>
        )
    }
}

export default CurrentDateTime;