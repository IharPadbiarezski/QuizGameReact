import React, {Component} from 'react';
import Answer from './Answer';

class Answers extends Component {
    state = {
        answer: '',
        answer2: ''
    }

    answerInformation = (active, answer2) => {
        this.setState({
            answer2: answer2
        })
        console.log(this.state.answer2)
    }
    
    
    render() {
        const {answers} = this.props;
        return(
            <div>
<ul className="answers-container answers">
                <Answer answerInformation={this.answerInformation} answer={answers[0]} />
                <Answer answerInformation={this.answerInformation} answer={answers[1]} />
                <Answer answerInformation={this.answerInformation} answer={answers[2]} />
                <Answer answerInformation={this.answerInformation} answer={answers[3]} />
            </ul>
            <p>{this.state.answer}</p>
            </div>

        )
    }
}

export default Answers;