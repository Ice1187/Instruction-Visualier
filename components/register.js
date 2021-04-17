import React from "react";
import styles from "../styles/Register.module.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.reg = this.props.reg;

    // Reference directly from this.reg, don't use this.state.value
    this.state = { value: this.reg.toString() };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let value = parseInt(e.target.value.slice(3), 16);
    this.reg.setValue(value);
    this.setState({ value: this.reg.toString() });
  }

  render() {
    return (
      <>
        <text className={styles.reg_name}>{this.reg.name}</text>
        <input
          className={styles.reg_val}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

export default Register;
