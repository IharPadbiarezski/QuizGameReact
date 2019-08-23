import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, onClick, buttonClassName, value }) => {
    return (
        <button id={id} className={buttonClassName} onClick={onClick}>{value}</button>
    )
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    buttonClassName: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string,
}

Button.defaultValues = {
    buttonClassName: '',
    onClick: () => {},
    value: '',
}

export default Button;