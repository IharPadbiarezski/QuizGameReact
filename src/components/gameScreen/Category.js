import React, {Component} from 'react';

class Category extends Component {
    render() {
        return (
            <p className="category">Category: {this.props.value}</p>
        )
    }
}

export default Category;