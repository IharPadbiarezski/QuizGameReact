import React from 'react';
import Badge from './Badge';

const Badges = () => {
    return(
        <div className="totals">
            <Badge value={0} class="badge badge-success" />
            <Badge value={1} class="badge badge-danger" />
        </div>
    )
}

export default Badges;