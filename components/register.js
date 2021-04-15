import React from 'react'
import styles from '../styles/Register.module.css'

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.cpu = this.props.cpu;
		this.name = this.props.name;
		this.reg = this.cpu[this.name];

		this.state = {value: this.reg.toString()}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
		this.reg.setValue(parseInt(e.target.value, 16));
	}

	render() {
		return <React.Fragment> 
			<text className={styles.reg_name}>{this.name}</text>
			<input 
				className={styles.reg_val}
				type="text"
				defaultValue={this.state.value}
				onChange={this.handleChange}
				// onChange={((e) => this.setState({value: e.target.value})) }
			/>
		</React.Fragment>
	}
}

export default Register;

