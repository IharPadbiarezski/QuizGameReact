import React from 'react';
import PropTypes from 'prop-types';
import './Greeting.css';

const Greeting = ({ name }) => {
    return(
        <h5 className="greeting">Hello, dear { name }!</h5> 
    )
}

Greeting.propTypes = {
    name: PropTypes.string,
}

Greeting.defaultProps = {
    name: '',
}

export default Greeting;