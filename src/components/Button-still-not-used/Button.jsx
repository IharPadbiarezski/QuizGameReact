import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.checkAnswer = this.checkAnswer.bind(this);
    }
    checkAnswer = () => {
		console.log("hello")
    };
    
    render() {
        return (
            <div className="col-md-6 text-right">
                <button id={this.props.id} className={this.props.class}>{this.props.value}</button>
            </div>
        )
    }
}

export default Button;