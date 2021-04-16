import React from 'react'
import styles from '../styles/Register.module.css'

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.reg = this.props.reg;

		this.state = {value: this.reg.toString()}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		// this.setState({value: e.target.value});
		this.reg.setValue(parseInt(e.target.value, 16));
		this.setState({value: this.reg.toString()});
	}

	render() {
		return <React.Fragment> 
			<text className={styles.reg_name}>{this.reg.name}</text>
			<input 
				className={styles.reg_val}
				type="text"
				value={this.state.value}
				onChange={this.handleChange}
			/>
		</React.Fragment>
	}
}

export default Register;

