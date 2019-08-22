import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../Badge';
import './Badges.css';

const Badges = ({ correctAnswersAmount, incorrectAnswersAmount}) => {
    return(
        <div className="totals">
            <Badge value={correctAnswersAmount} componentClassName="badge badge-success" />
            <Badge value={incorrectAnswersAmount} componentClassName="badge badge-danger" />
        </div>
    )
}

Badges.propTypes = {
    correctAnswersAmount: PropTypes.number.isRequired,
    incorrectAnswersAmount: PropTypes.number.isRequired,
}

export default Badges;