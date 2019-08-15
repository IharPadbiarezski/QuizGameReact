import React from 'react';

const Badge = (props) => {
    return (
        <span className={props.class}>{props.value}</span>
    )
}

export default Badge;