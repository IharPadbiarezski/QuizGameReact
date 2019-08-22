import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

const Badge = ({ componentClassName, value }) => {
    return (
        <span className={ componentClassName }>{ value }</span>
    )
}

Badge.propTypes = {
    componentClassName: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
}

export default Badge;