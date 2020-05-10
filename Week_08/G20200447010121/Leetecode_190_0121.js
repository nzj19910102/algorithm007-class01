const reverseBits = function (n) {
    let num = 0b0;
    for (let i = 0; i <= 31; i++) {
        num |= (((n >> (31 - i)) & 1) << i) >>> 0
    }
    return num >>> 0;
};