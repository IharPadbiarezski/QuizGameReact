import React, {Component} from 'react';
import Answer from './Answer';

class Answers extends Component {
    
    render() {
        return(
            <ul className="answers-container answers">
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </ul>
        )
    }
}

export default Answers;