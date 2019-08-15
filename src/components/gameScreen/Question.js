import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <h4 className="question">{this.props.question}</h4>
        )
    }
}

export default Question;