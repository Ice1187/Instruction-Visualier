import React from "react";
import styles from "../styles/Stack.module.css";

class Stack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={styles.stk_frame}>
          <text className={styles.stk_title}>Stack Here</text>
        </div>
      </>
    );
  }
}

export default Stack;