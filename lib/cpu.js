import {Bytes, U64, U32} from './bits.js'

class Register extends U32 {
	constructor() {
		super();
	}

	isInputValueInt(value) {
		if(typeof value !== "number")
			throw `Invalid Type: Expect "number", but get ${typeof value}`;
	}

	setValue(value) {
		// Check
		this.isInputValueInt(value)
	
		console.log('ABC:' + value);
		super.setBytes(value);
	}

	toBitString() {
		return super.toBitString();
	}

	toString(base = 16, prefix = '0x') {
		return super.toString(base, prefix);
	}
}

class CPU {
	constructor() {
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
	}	

	
}

export default CPU;
