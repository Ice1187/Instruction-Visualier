import {Bytes, U64, U32} from './bits.js'

class Register extends U32 {
	constructor(name) {
		super();
		this.name = name;
	}

	isInputValueInt(value) {
		if(typeof value !== "number" || isNaN(value))
			throw `Invalid Type: Expect "number", but get ${typeof value} (${value})`;
	}

	setValue(value) {
		// Check
		this.isInputValueInt(value)
		console.log(`setVlaue: ${value}`);
	
		super.setBytes(value);
	}

	toBitString() {
		return super.toBitString();
	}

	toString() {
		return super.toString('0x');
	}
}

class CPU {
	constructor() {
		// Register
		this.regs = {};
		let name;
		for (let i=0; i<32; i=i+1) {
			name = `x${i}`;
			Object.assign(this.regs, {[name]: new Register(name)});	
		}
		
		// Instruction
	}	

	
}

export default CPU;
