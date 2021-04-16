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
		this.regs = {};
		for (let i=0; i<32; i=i+1) {
			let name = `x${i}`;
			Object.assign(this.regs, {[name]: new Register(name)});	
		}
		
/*
		this.x0 = new Register();
		this.x1 = new Register();
		this.x2 = new Register();
		this.x3 = new Register();
		this.x4 = new Register();
		this.x5 = new Register();
		this.x6 = new Register();
		this.x7 = new Register();
		this.x8 = new Register();
		this.x9 = new Register();
		this.x10 = new Register();
		this.x11 = new Register();
		this.x12 = new Register();
		this.x13 = new Register();
		this.x14 = new Register();
		this.x15 = new Register();
		this.x16 = new Register();
		this.x17 = new Register();
		this.x18 = new Register();
		this.x19 = new Register();
		this.x20 = new Register();
		this.x21 = new Register();
		this.x22 = new Register();
		this.x23 = new Register();
		this.x24 = new Register();
		this.x25 = new Register();
		this.x26 = new Register();
		this.x27 = new Register();
		this.x28 = new Register();
		this.x29 = new Register();
		this.x30 = new Register();
		this.x31 = new Register();
*/
	}	

	
}

export default CPU;
