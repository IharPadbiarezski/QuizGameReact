import React from 'react';
import Badge from './Badge';

const Badges = (props) => {
    return(
        <div className="totals">
            <Badge value={props.correctAnswersAmount} class="badge badge-success" />
            <Badge value={props.incorrectAnswersAmount} class="badge badge-danger" />
        </div>
    )
}

export default Badges;