import React, { Component } from 'react';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            answer2: ''
        }
        this.selectAnswer = this.selectAnswer.bind(this);
    }

    selectAnswer = (e) => {
        this.setState({
            active: true,
            answer: e.target.textContent
        })
        const {active, answer2} = this.state;
        this.props.answerInformation(active, answer2);
    };

    render() {
        const {active} = this.state;
        let className = 'answer';
        if (active) {
            className = 'answer active';
        }
        return (
           <li onClick={this.selectAnswer} className={className} >{this.props.answer}</li> 
        )
    }
}

export default Answer;