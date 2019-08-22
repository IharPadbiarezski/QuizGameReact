import React, { Component } from 'react';
import Storage from '../../localStorage';

class Form extends Component {
	state = {
        name: '',
        email: ''
    };
	
	componentDidMount() {
		const user = Storage.getItemFromStorage('user') || '';
		const { name, email } = user;
		this.setState({
			name,
			email
		});
	  }

	handleSubmit = (e) => {
		e.preventDefault();
        const { name, email } = this.state;
		Storage.saveIntoStorage( "user", {name, email})
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
						value={this.state.name || ''}
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
						value={this.state.email || ''}
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
