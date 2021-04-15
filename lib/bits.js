const BYTE_LEN = 8; 

class Bytes {
	constructor(size) {
		this.SIZE_IN_BYTE = size;
		this.SIZE_IN_BIT = this.SIZE_IN_BYTE * BYTE_LEN;
		this.value = new Array(this.SIZE_IN_BIT).fill(0);
	}

	isBitFieldValid(start, end) {
		if (!((start <= end) &&
				 ((0 <= start) && (start <= this.SIZE_IN_BIT)) && 
				 ((0 <= end) && (end <= this.SIZE_IN_BIT)))) {
			throw `Invalid Field: (${start}, ${end}) is not a valid field for ${this.SIZE_IN_BIT}`; 
		}
	}

	isValueInBitFieldRange(value, field_size) {
		let field_range = Math.pow(2, field_size);
		if (!(((0 <= value) && (value < field_range)))) {
			throw `Invalid Value: ${value} not in range ${field_range}`;		}	
	}

	getBits(start, end) {
		// Check 
		this.isBitFieldValid(start, end);

		let bits = this.value.slice(start, end);
		let ret = 0;

		for(let idx = start; idx < end; idx++) {
			ret += this.value[(this.SIZE_IN_BIT-1) - idx] << (idx-start);
		}

		return ret;
	}

	setBits(value, start, end) {
		// Check 
		this.isBitFieldValid(start, end);
		this.isValueInBitFieldRange(value, end-start);

		for (let idx = start; idx < end; idx++) {
			this.value[(this.SIZE_IN_BIT-1) - idx] = value % 2; 
			value = value >>> 1;
		}	
	}

	getBytes(start=0, end=this.SIZE_IN_BYTE) {
		return this.getBits(start*BYTE_LEN, end*BYTE_LEN);
	}

	setBytes(value, start=0, end=this.SIZE_IN_BYTE) {
		this.setBits(value, start*BYTE_LEN, end*BYTE_LEN);	
	}

	toBitString() {
		return this.value.join('');
	}

	toString(base = 16, prefix = '') {
		let ret = '';
	
		for(let idx = 0; idx < this.SIZE_IN_BYTE; idx++) {
			let val = this.getBytes(idx, idx+1);
			ret += '0'.concat(val.toString(base)).substr(-2)  // 0 should be 00
		}
		
		return `${prefix}${ret}`;
	}

}

class U32 extends Bytes {
	constructor() {
		super(4);
	}	

}

class U64 extends Bytes {
	constructor() {
		super(8);
	}	

}

export {Bytes, U64, U32};
