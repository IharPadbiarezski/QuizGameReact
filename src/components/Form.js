import React, { Component } from 'react';

class Form extends Component {
	state = {
		userName: ''
	};

	handleSubmit = (e) => {
		e.preventDefault();

        const { userName } = this.state;
        console.log(userName)

	};

	handleChange = (e) => {
		const { value } = e.target;

		this.setState({
			userName: value
		});
	};

	validateForm = () => {
		const { userName } = this.state;

		const notValid = !userName;

		return notValid;
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Name</label>
					<input
						onChange={this.handleChange}
						id="name"
						name="name"
						className="u-full-width"
						placeholder="vasya"
					/>
				</div>
				{/* <div className="row">
					<label>Months to Repay</label>
					<select onChange={this.handleChange} name="term" className="u-full-width">
						<option value="">Select</option>
						<option value="3">3 Months</option>
						<option value="6">6 Months</option>
						<option value="12">12 Months</option>
						<option value="24">24 Months</option>
					</select>
				</div> */}
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
