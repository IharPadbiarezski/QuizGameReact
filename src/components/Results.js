import React, { Component } from 'react';

class Results extends Component {
    render() {
        return(
            <div className="result">
                <h2>Results:</h2>
                <p>Correct Answers: {this.props.correct}</p>
                <p>Incorrect Answers: {this.props.incorrect}</p>
                <p>Your Position: {this.props.position}</p>
		    </div>
        )
    }
}

export default Results;