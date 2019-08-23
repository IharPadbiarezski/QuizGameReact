import React, { Component } from 'react';
import LabelledInput from '../LabelledInput/';
import './Form.css';
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
					<LabelledInput
						label="Name"
						labelClassName="registration__label"
						onChange={this.handleChange}
						id="name"
                        name="name"
                        type="text"
						inputClassName="u-full-width registration__input"
						placeholder="vasya"
						defaultValue={this.state.name || ''}
					/>
				</div>
                <div>
					<LabelledInput
						label="Email"
						labelClassName="registration__label"
						onChange={this.handleChange}
						id="email"
                        name="email"
                        type="email"
						inputClassName="u-full-width registration__input"
						placeholder="example@gmail.com"
						defaultValue={this.state.email || ''}
					/>
                </div>
				<div>
					<LabelledInput 
						disabled={this.validateForm()}
						type="submit"
						defaultValue="Start"
						inputClassName="u-full-width button-primary"
					/>
				</div>
			</form>
		);
	}
}

export default Form;
