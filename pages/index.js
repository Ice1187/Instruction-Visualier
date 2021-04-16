import Head from 'next/head'
import React from 'react'

import Register from '../components/register.js'

import CPU from '../lib/cpu.js'

import styles from '../styles/Main.module.css'


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.cpu = new CPU();

		this.getRegList = this.getRegList.bind(this);
		this.showRegisterValue = this.showRegisterValue.bind(this);
	}

	getRegList() {
		let reg_list = [];

		for (let i = 0; i < 16; i++) {
			reg_list.push(<Register reg={this.cpu.regs[`x${i}`]}/>);
			reg_list.push(<Register reg={this.cpu.regs[`x${i+16}`]}/>);
		}
		
		return reg_list;
	}

 	showRegisterValue() {
		for(let i = 0; i < 32;i++) {
			let name = `x${i}`;
			if (this.cpu.regs[name].getBytes() !== 0) {
				console.log(name);
				console.log(this.cpu.regs[name].toBitString());
				console.log(this.cpu.regs[name].toString());
			}
		}
	}
	
	render() {
		return (
			<>
				<Head>
					<title>Instruction Visualizer</title>
				</Head>

				<main className={styles.main}>
					<div className={styles.ins_frame}>
						<text className={styles.ins_title}>Instruction Here</text>
						<textarea 
							className={styles.ins_area}
							rows="10"
							cols="20"
							wrap="hard"
							autoFocus
							placeholder="mov $rax, 0xdeadbeef"
						/>
					</div>
					<div className={styles.reg_frame}>
						<text className={styles.reg_title}>Register Here</text>
						{this.getRegList()}
						<button onClick={this.showRegisterValue}>show register value</button>
					</div>
					<div className={styles.mem_frame}>
						<text className={styles.mem_title}>Memory Here</text>
						<textarea className={styles.mem_area} />
					</div>
				</main>
			</>
		)
	}
}

export default Home;
