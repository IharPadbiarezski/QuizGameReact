import React from 'react';
import PropTypes from 'prop-types';
import './Category.css';

const Category = ({ value }) => {
        return (
            <p className="category">Category: { value }</p>
        )
}

Category.propTypes = {
    value: PropTypes.string,
}

Category.defaultProps = {
    value: '',
}

export default Category;