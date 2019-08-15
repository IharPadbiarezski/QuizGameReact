import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        return(
            <h5 className="greeting">Hello, dear {this.props.name}!</h5> 
        )
    }
}

export default Greeting;