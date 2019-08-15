import React, {Component} from 'react';
import Answer from './Answer';

class Answers extends Component {
    state = {
        answer_1: "Ihar",
        answer_2: "Jerry",
        answer_3: "Tom",
        answer_4: "Bred"
    }
    
    render() {
        return(
            <ul className="answers-container answers">
                <Answer answer={this.state.answer_1} />
                <Answer answer={this.state.answer_2} />
                <Answer answer={this.state.answer_3} />
                <Answer answer={this.state.answer_4} />
            </ul>
        )
    }
}

export default Answers;