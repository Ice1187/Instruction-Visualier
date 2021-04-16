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

		for(let idx = end-1; idx >= start; idx--) {
			ret += this.value[idx] << ((end-1)-idx);
		}

		return ret;
	}

	setBits(value, start, end) {
		// Check 
		this.isBitFieldValid(start, end);
		this.isValueInBitFieldRange(value, end-start);

		for (let idx = end-1; idx >= start; idx--) {
			this.value[idx] = value % 2; 
			value = value >>> 1;
		}	
	}

	getByte(byte_) {
		return this.getBits(byte_*BYTE_LEN, (byte_+1)*BYTE_LEN);
	}

	getBytes(start=0, end=this.SIZE_IN_BYTE) {
		let ret = 0;

		for(let byte_ = start; byte_ < end; byte_++) {
			ret += this.getByte(byte_) << (BYTE_LEN*(byte_-start));
		}
		
		return ret;
	}

	setByte(value, byte_) {
		this.setBits(value, byte_*BYTE_LEN, (byte_+1)*BYTE_LEN);
	}

	setBytes(value, start=0, end=this.SIZE_IN_BYTE) {
		for(let byte_ = start; byte_ < end ; byte_++) {
			this.setByte(value % (1 << BYTE_LEN), byte_);
			value = value >>> BYTE_LEN;
		}
	}

	toBitString() {
		return this.value.join('');
	}

	toString(prefix = '') {
		let ret = `0000000${this.getBytes().toString(16)}`.slice(-8);
	
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
