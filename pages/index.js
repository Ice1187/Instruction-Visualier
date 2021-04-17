import Head from "next/head";
import React from "react";
import Register from "../components/register.js";
import Instruction from "../components/instruction.js";
import Stack from "../components/stack.js";

import CPU from "../lib/cpu.js";

import styles from "../styles/Main.module.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.cpu = new CPU();

    this.getRegList = this.getRegList.bind(this);
    this.showRegisterValue = this.showRegisterValue.bind(this);
  }

  getRegList() {
    let reg_list = [];
    let name = (num) => `x${num}`;

    for (let i = 0; i < 16; i++) {
      reg_list.push(<Register key={name(i)} reg={this.cpu.regs[name(i)]} />);
      reg_list.push(
        <Register key={name(i + 16)} reg={this.cpu.regs[name(i + 16)]} />
      );
    }

    return reg_list;
  }

  showRegisterValue() {
    for (let i = 0; i < 32; i++) {
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
          <Instruction />
          <div className={styles.reg_frame}>
            <text className={styles.reg_title}>Register Here</text>
            {this.getRegList()}
            {/*<button onClick={this.showRegisterValue}>
              show register value
            </button>*/}
          </div>
          <Stack />
          <div className={styles.mem_frame}>
            <text className={styles.mem_title}>Memory Here</text>
            <textarea className={styles.mem_area} />
          </div>
        </main>
      </>
    );
  }
}

export default Home;
