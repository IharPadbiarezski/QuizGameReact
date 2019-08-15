import React, {Component} from 'react';

class Category extends Component {
    state = {
        category: ''
    }

    render() {

        let question = {
            category: "Life Style"
        }
        return (
            <p className="category">Category: {question.category}</p>
        )
    }
}

export default Category;