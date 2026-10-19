// Insertion Sort 
let arr = [14,9,15,12,6,8,13];
for(let i = 0;i < arr.length;i++){
    let j = i;
    while(j > 0 && arr[j-1] > arr[j]){
        [arr[j],arr[j - 1]] = [arr[j - 1],arr[j]];
        j--; 
    }
}
console.log(arr);