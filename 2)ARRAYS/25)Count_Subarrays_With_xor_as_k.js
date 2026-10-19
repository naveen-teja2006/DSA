// Count Subarrays With xor as k
let arr = [4,2,2,6,4];
let k = 6;
let count = 0;
let map = new Map();
let prefixXor = 0;
map.set(0,1);
for(let i = 0;i < arr.length;i++){
    prefixXor ^= arr[i];
    let x = prefixXor ^ k;                                                         
    count += map.get(x) || 0;
    map.set(prefixXor,(map.get(prefixXor) || 0) + 1);
}
console.log(count);