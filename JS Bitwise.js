/* 
    JS Bitwise Operations
    &           AND                             Sets each bit to 1 if both bits are 1
    |           OR                              Sets each bit to 1 if one of two bits is 1
    ^           XOR                             Sets each bit to 1 if only one of two bits is 1
    ~           NOT                             Inverts all the bits
    <<          Zero fill left shift            Shifts left by pushing zeros in from the right and let the leftmost bits fail off
    >>          Signed right shift              Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
    >>>         Zero fill right shift           Shifts right by puhsing zeros in from the left, and let the rightmost bits fall off

*/

console.log(5 & 1); // 0101 & 0001  = 0001
console.log(5 | 1); // 0101 | 0001  = 0101
console.log(~5);    // ~0101        = 1010
console.log(5 << 1); // 0101 << 1   = 1010
console.log(5 ^ 1); // 0101 ^ 0001  = 0100
console.log(5 >> 1); // 0101 >> 1   = 0010
console.log(5 >>> 1); // 0101 >>> 1 = 0010

// Bitwise AND
console.log(0 & 0) // 1111 & 0000  = 0000
console.log(0 & 1) // 1111 & 0001  = 0001
console.log(1 & 0) // 1111 & 0010  = 0010 
console.log(1 & 1) // 1111 & 0100  = 0100 






