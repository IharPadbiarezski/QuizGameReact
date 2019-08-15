import React, { Component } from 'react';

class Question extends Component {
    state = {
        question: "What is your name?"
    }

    render() {
        return (
            <h4 className="question">{this.state.question}</h4>
        )
    }
}

export default Question;