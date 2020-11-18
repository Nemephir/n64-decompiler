class Bit {

    address;
    value;

    constructor( address , value ) {
        this.address = "0x" + this.decToHex(address);
        this.value   = value;
    }

    hex() {
        return this.decToHex(this.value)
    }

    char() {
        return String.fromCharCode(this.value);
    }

    decToHex( dec ) {
        return dec > 16
            ? dec.toString(16)
            : "0" + dec.toString(16);
    }

}

module.exports = Bit;