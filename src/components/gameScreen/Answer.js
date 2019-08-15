import React, { Component } from 'react';

class Answer extends Component {
    state = {
        answer: 'Doris'
    }

    render() {
        return (
           <li className="answer">{this.props.answer}</li> 
        )
    }
}

export default Answer;