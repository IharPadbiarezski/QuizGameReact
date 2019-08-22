import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';

const Question = ({ question }) => {
    return (
        <h4 className="question">{ question }</h4>
    )
}

Question.propTypes = {
    question: PropTypes.string,
}

Question.defaultProps = {
    question: '',
}

export default Question;