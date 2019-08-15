import React from 'react';

const Button = (props) => {
    return (
        <div className="col-md-6 text-right">
            <button id={props.id} className={props.class}>{props.value}</button>
        </div>
    )
}

export default Button;