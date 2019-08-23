import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ selectedOption, answer, onChange }) => {
    return (
        <div className={selectedOption === answer ? "answer active" : "answer"}>
            <label>
                <input
                    type="radio"
                    className="radio__input"
                    value={answer} 
                    checked={selectedOption === answer}
                    onChange={onChange}
                />
                {answer}
            </label>
        </div>
    )
}

Answer.propTypes = {
    selectedOption: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}

Answer.defaultTypes = {
    onChange: () => {},
}

export default Answer;
