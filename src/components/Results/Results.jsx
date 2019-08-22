import React from 'react';
import PropTypes from 'prop-types';
import './Results.css';

const Results = ({ correctAnswersAmount, incorrectAnswersAmount, position }) => {
    return(
        <div className="results">
            <h2>Results:</h2>
            <p>Correct Answers: { correctAnswersAmount }</p>
            <p>Incorrect Answers: { incorrectAnswersAmount }</p>
            <p>Your Position: { position }</p>
		</div>
    )
}

Results.propTypes = {
    correctAnswersAmount: PropTypes.number.isRequired,
    incorrectAnswersAmount: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired,
}

export default Results;