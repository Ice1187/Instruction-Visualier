import React from 'react'

import styles from '../styles/Instruction.module.css'

class Instruction extends React.Component {
	constructor(props) {
		super(props);
			
	}
	
	render() {
		return (
			<div className={styles.frame}>
				<text className={styles.title}>Instruction Here</text>
				<text className={styles.address}>Address</text>
				<textarea 
					className={styles.area}
					rows="10"
					cols="20"
					wrap="hard"
					autoFocus
					placeholder="addi x5, x0, 0xdeafbeef"
				/>
				<div className={styles.btns}>
					<button className={styles.btn_reset}>Reset</button>
					<button className={styles.btn_step}>Step</button>
					<button className={styles.btn_run}>Run</button>
				</div>
			</div>
		)
	}
}

export default Instruction;
