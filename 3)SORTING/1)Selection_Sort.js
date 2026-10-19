// Selection Sort Algorithm
let arr = [13, 46, 24, 52, 20, 9];
for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
        if(arr[j] < arr[min]){
            min = j;
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}                                            
console.log(arr);