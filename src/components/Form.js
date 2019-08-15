import React, { Component } from 'react';
import Cookies from '../cookies';

class Form extends Component {
	state = {
        name: '',
        email: ''
    };
    
    // componentDidMount() {
        
    //     setTimeout(() => {
    //         const name = Cookies.readCookie("name");
    //         if (name) {
    //             this.setState({
    //                 name: name
    //             })
    //         }
    //     }, 2000)
    //     // console.log(name)
    //     // this.setState({
    //     //     name: "dsfds"
    //     // })
    // }

	handleSubmit = (e) => {
		e.preventDefault();

        const { name, email } = this.state;
        Cookies.createCookie("name", name)
        this.props.userInformation(name, email);
	};

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		});
	};

	validateForm = () => {
		const { name, email } = this.state;

		const notValid = !name && !email;

		return notValid;
	};

	render() {
		return (
			<form className="registration__form" onSubmit={this.handleSubmit}>
				<div>
					<label className="registration_label">Name</label>
					<input
						onChange={this.handleChange}
						id="name"
                        name="name"
                        type="text"
						className="u-full-width registration__input"
						placeholder="vasya"
					/>
				</div>
                <div>
                <label className="registration_label">Email</label>
					<input
						onChange={this.handleChange}
						id="email"
                        name="email"
                        type="email"
						className="u-full-width registration__input"
						placeholder="example@gmail.com"
					/>
                </div>
				<div>
					<input
						disabled={this.validateForm()}
						type="submit"
						value="Start"
						className="u-full-width button-primary"
					/>
				</div>
			</form>
		);
	}
}

export default Form;
